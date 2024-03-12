import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate  } from 'react-router-dom' 
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'
    

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const navigate = useNavigate()

  const stripe = useStripe()
  const elements = useElements()

  const [succeded, setSucceded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null)
  const [disable, setDisable] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)  

  useEffect(() => {
    const getClientSecret = async () => {
        const response  = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}` 
        });
        setClientSecret(response.data.clientSecret)
        
        

    }

    getClientSecret();
  }, [basket])

  console.log('El SECRETO ES *********',  clientSecret )

  const handleSubmit = async event => {

    event.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    } ).then(({ paymentIntent }) => {

     db
        .collection('users')
        .doc(user?.uid)
        .collecton('orders')
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created

        })

        
      setSucceded(true);
      setError(null);
      setProcessing(false)  
      
      dispatch({
        type: 'EMPTY_BASKET'
      })

      navigate('/orders')
    })

  }

  const handleChange = event => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "")
  }

  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (
                    <Link to='/checkout'>{basket?.length} items </Link>
                )
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>delivery address</h3>
                </div>
                <div className="payment__adress">
                    <p>{user?.email}</p>
                    <p>Maclovio Herrera 12</p>
                    <p>Parral Chihuahua</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and delivery</h3>
                </div>
                <div className="paymetn__items">
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price= {item.price}
                            rating={item.rating}
                            />
                    ))}
                </div>  
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>metodo de pago</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__priceContainer">
                            <h3>Total Orden {getBasketTotal(basket)}  </h3>
                            <button disabled={processing || disable || succeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                            </button>
                        </div>

                         {error && <div>{error}</div> }                   

                    </form>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Payment