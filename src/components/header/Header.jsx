import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ME1 from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header id='#'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Esmerald Seitlli</h1>
        <h5 className='text-ligh'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME1} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
