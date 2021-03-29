import React from 'react'

import github from '../../styles/assets/git-vector.jpg'
import link from '../../styles/assets/link.jpg'
import video from '../../styles/assets/projects/movi-rate.mov'
import img from '../../styles/assets/projects/movi-rate.png'
import logo from '../../styles/assets/projects/movi-rate.jpg'

import Slide from 'react-reveal/Slide'

const MoviRate = ({ selected, setSelected }) =>  {

  return (
    <Slide up>
      <div className='p-field'>

        <div className='p-content'>
          <div className='p-title-cont'>
            <img src={logo} className='logo' alt='logo'/>
            <h1> MoviRater</h1>
          </div>
          <p> Website game that involves guessing which movies between two provided has the higher popularity rating. Comes with optional high score and drinking modes activated by toggles. Also has new movies section that provides data on newest upcoming movies. Created using tmdb API.</p>
          <br/>
          <p> - Javascript, ReactJS</p>
          <br/>
          <div className='flex'>
            <a href='https://github.com/kimbertham/MOVI_RATR'>
              <img src={github} alt='github' className='p-icon'/>
            </a>
            <a href='https://movi-rate.netlify.app/'>
              <img src={link} alt='link' className='p-icon'/>
            </a>
          </div>
        </div>

        <div className='p-divide'/>

      
        <video src={video}  preload="auto" muted controls
          className={selected === 'Match' ? 'p-select' : 'display-none'} 
          onMouseOver={e => e.target.play()}
          onMouseLeave={e =>{
            e.target.pause()
            setSelected()
          }}/>
          
        <img className={selected !== 'Match' ? 'p-mov' : 'display-none'} 
          src={img} alt='img'
          onMouseEnter={() => setSelected('Match')}/>
        

      </div>
    </Slide>
  )
}

export default MoviRate