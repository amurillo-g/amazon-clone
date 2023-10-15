import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='home__image'/>

            <div className="home__row">
              <Product
                id="54554" 
                title= "vestido sexy rojo"
                price={102.99}
                image="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                rating={3}
              />
              <Product 
                id="545564" 
                title= "vestido sexy color verde con tirantes marca fashionbox"
                price={102.99}
                image="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>

            <div className="home__row">
              <Product 
                id="5455464" 
                title= "vestido sexy"
                price={102.99}
                image="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Product 
                id="4554564" 
                title= "vestido sexy"
                price={102.99}
                image="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Product 
                id="5455464" 
                title= "vestido sexy"
                price={102.99}
                image="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>

            <div className="home__row">
              <Product 
                id="545545649" 
                title= "vestido sexy"
                price={102.99}
                image="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
        </div>
    </div>
  )
}

export default Home