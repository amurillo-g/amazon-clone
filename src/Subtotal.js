import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const navigate = useNavigate()
  const [{ basket }, dispatch] = useStateValue();

  return (
   <div className="subtotal">
      <p>
          Subtotal({basket.length} items): <strong>{getBasketTotal(basket)}</strong> 
      </p>
      <small className='subtotal__gift'>
          <input type='checkbox'/> esta orden tiene un regalo
      </small>

      <button onClick={ e => navigate('/payment')}>Proceed to Checkout</button>
   </div>
            
          
  )
}

export default Subtotal

/*<CurrencyFormat 
      renderText={(value) => (
        <>
          <p>
            Subtotal({basket.length} items): <strong>{value}</strong> 
          </p>
          <small className='subtotal__gift'>
            <input type='checkbox'/> esta orden tiene un regalo
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType='text'
      thousandSeparator={true}
      prefix={"$"}
      />*/