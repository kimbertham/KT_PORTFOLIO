import React from 'react'
import github from '../../styles/assets/git-vector.jpg'
import link from '../../styles/assets/link.jpg'
import demo from '../../styles/assets/demo.jpg'
import video from '../../styles/assets/projects/nose.mov'
import img from '../../styles/assets/projects/nose.png'
import logo from '../../styles/assets/projects/nose.jpg'

import Slide from 'react-reveal/Slide'

const Nosedive = ({ selected, setSelected }) => {
  return (
    <Slide up>
      <div className='p-field'>

        <div className='p-field'>
          <div className='p-content'>
            <div className='p-title-cont'>
              <img src={logo} className='logo' alt='logo'/>
              <h1> Nosedive</h1>
            </div>
            <p> Social media website focusing on users ratings of each other, as seen on television series Black Mirror. Alters users experience and restrictions based on a 5 star rating. Includes a profile, forum, messaging system, rating statistics/feedback and wishlist. 
            </p>
            <br/>
            <p>- Javascript, ReactJS, Python, Django, PostgreSQL.</p>
            <br/>
            <div className='flex'>
              <a href='https://github.com/kimbertham/NOSEDIVE-PROJECT' className='link'>
                <img src={github} alt='github' className='p-icon'/>
              </a>
              <a href='https://nosedive-ga.herokuapp.com/login'> <img src={link} alt='link' className='p-icon'/>
              </a>
              <a href='https://nosedive-ga.herokuapp.com/demo'>
                <img src={demo} alt='demo' className='p-icon'/>
              </a>
            </div>
          </div>

          <div className='p-divide'/>


          <video src={video} preload="auto" muted controls
            className={selected === 'Nosedive' ? 'p-select' : 'display-none'} 
            autoPlay
            onMouseLeave={e =>{
              e.target.pause()
              setSelected()
            }}/>
          
          <img src={img} alt='img'
            className={selected !== 'Nosedive' ? 'p-mov' : 'display-none'} 
            onMouseEnter={() => setSelected('Nosedive')}/>


        </div>
      </div>
    </Slide>
  )
}
export default Nosedive