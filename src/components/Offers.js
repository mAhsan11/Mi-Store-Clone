import React from 'react'
import Offer from "./components/Offer.js"
import '../styles/Offers.css'

const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
        {offer.map((item,index) => {
            return(
                <Offer key={item.image} index={index} src={item.image} link={item.url}></Offer>
            )
        })}
    </div>
  )
}

export default Offers