import React from 'react'
import Header from '../../layout/header/Header'
import ShopHeader from '../../components/shop-header/ShopHeader'
import Clients from '../../components/clients/Clients'
import ShoppingCard from '../../components/shopping-cards/ShoppingCard'

const Home = () => {
  return (
    <React.Fragment>
       <ShopHeader/>
       <Clients/>
       <ShoppingCard/>
    </React.Fragment>
  )
}

export default Home