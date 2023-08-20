import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
        <img src={ME} alt="About Image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Exp</h5>
              <small>3 yrs work</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200 Clients</small>
            </article>
            <article className='about__card'>
              <BiLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80</small>
            </article>
          </div>
            
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, amet accusamus aliquid quod mollitia vero exercitationem officiis unde modi sint, dolore eius nobis reprehenderit inventore itaque voluptate sequi similique dicta?
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           
          </div>
        
      </div>
    </section>
  )
}

export default About