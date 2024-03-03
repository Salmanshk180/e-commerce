import React from 'react'
import Header from '../../layout/header/Header'
import ShopHeader from '../../components/shop-header/ShopHeader'
import Clients from '../../components/clients/Clients'

const Home = () => {
  return (
    <React.Fragment>
       <Header/>
       <ShopHeader/>
       <Clients/>
    </React.Fragment>
  )
}

export default Home