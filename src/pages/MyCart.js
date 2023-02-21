import React from 'react'
import Header from '../components/Header'
import CartDetails from '../components/CartDetails'
import Discount from '../components/Discount'
import Footer from '../components/Footer'
import { Container } from '../styles/Container'

const MyCart = () => {

  return (
    <div>
        <Header/>
        <Container>
         <CartDetails/>
        <Discount/>
        </Container>
        <Footer/>
    </div>
  )
}

export default MyCart