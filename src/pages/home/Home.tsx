import React from 'react'
import ShopHeader from '../../components/shop-header/ShopHeader'
import Clients from '../../components/clients/Clients'
import ShoppingCard from '../../components/shopping-cards/ShoppingCard'
import DesktopContent from '../../components/desktop-content/DesktopContent'

const Home = () => {
  return (
    <React.Fragment>
       <ShopHeader/>
       <Clients/>
       <ShoppingCard/>
       <DesktopContent/>
    </React.Fragment>
  )
}

export default Home