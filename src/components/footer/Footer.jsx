import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { FaGithubAlt } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>ULTRADX</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/esmerald.seitlli/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/aldo_seitlli/"><FaInstagram /></a>
        <a href="https://twitter.com/seitllee"><IoLogoTwitter /></a>
        <a href="https://github.com/Ultradx"><FaGithubAlt /></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Ultradx Portfolio. All right reserved.</small>
      </div>
    </footer>
  )
}
