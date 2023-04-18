import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { cartTotalQuantity, setOpenCart } from '../pages/CartSlice'

function Navbar() {
  const [isFixedNav, setIsFixedNav] = useState(false)
  const dispatch = useDispatch()
  const totalQuantity = useSelector(cartTotalQuantity)

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true
      })
    )
  }

  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setIsFixedNav(true)
    } else {
      setIsFixedNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll)
  }, [])

  return (
    <>
      <nav className={isFixedNav ? 'navFixed' : ''}>
        <div className='container'>
          <div className={`nav ${isFixedNav ? 'nav-black' : ''}`}>
            <img src={Logo} alt='logo' onClick={() => window.scrollTo({ top: (0, 0), behavior: 'smooth' })} />

            <div className='nav__icons'>
              {/* <i className='fa-solid fa-magnifying-glass'></i> */}
              <i className='fa-regular fa-heart'></i>
              <i onClick={onCartToggle} className='fa-solid fa-bag-shopping'></i>
              <p className='cart-number'>{totalQuantity}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
