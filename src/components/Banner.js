import React from 'react'
import landscape from '../styles/assets/landscape.jpg'
import { Parallax } from 'react-scroll-parallax'

const About = ({ section }) => {

  return (
    <div className='index b-section'>

      <div className='bg-cont'>
        <div style={{ backgroundImage: `url(${landscape})` }} className='bg-img' />
      </div>
      <div className='spinner' />
      <div className='spinner-left' /> 


      <Parallax className="custom-class" y={[40, -40]} tagOuter="figure">
        <div className='section center'>
          <div className='links'>
            <img src={require('../styles/assets/mail-vector.jpg')} alt='link' className='links-img' onClick={() => section('contact')}/>
            <a href='https://github.com/kimbertham'> 
              <img src={require('../styles/assets/git-vector.jpg')} alt='link' className='links-img'/>
            </a>
            <a href='https://www.linkedin.com/in/kimberley-tham/'>
              <img src={require('../styles/assets/in-vector.jpg')} alt='link' className='links-img'/>
            </a>
          </div>

          <div className='content'>
            <h3> HELLO, I&apos;M</h3>
            <h1 className='name'>KIMBERLEY&nbsp;THAM.</h1>
            <h2>FULL STACK WEV DEVELOPER</h2>
          </div>
    
          <div className='circle'>
            <p className='arrow'> ↓</p>
          </div>

        </div>
      </Parallax>
    </div>


  )
}

export default About