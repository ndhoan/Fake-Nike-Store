import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Hero from './components/Hero'
import { heroapi, topratesales, popularsales } from './data/data.js'
import Sales from './components/Sales'
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Cart />
      <main>
        <Hero heroapi={heroapi} />
        <Sales ifExists endpoint={popularsales} />
        <Sales endpoint={topratesales} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
