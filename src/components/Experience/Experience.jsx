import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Exp</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>CSS</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>JS</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>Bootstrap</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>Tailwind</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>VueJS</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
          </div>

        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>NodeJs</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
             <div> <h4>MongoDB</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>MSSQL</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>PHP</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div><h4>Tailwind</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            
          </div>

        </div>

        </div>
      
    </section>
  )
}

export default Experience