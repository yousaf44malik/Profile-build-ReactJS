import React from 'react'
import './Nav.css'
import {ImHome} from 'react-icons/im'
import {BiUserPin} from 'react-icons/bi'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {FaServicestack} from 'react-icons/fa'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const[activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"
      onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><ImHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ""}><BiUserPin/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ""}><BsFillJournalBookmarkFill/></a>
      <a href="#services"onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ""}><FaServicestack/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ""}><IoIosContact/></a>

    </nav>
  )
}

export default Nav