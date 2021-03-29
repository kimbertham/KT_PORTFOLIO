import React from 'react' 
import github from '../../styles/assets/git-vector.jpg'
import video from '../../styles/assets/projects/spotme.mov'
import img from '../../styles/assets/projects/spotme.png'
import logo from '../../styles/assets/projects/spotme.jpg'

import Slide from 'react-reveal/Slide'

const SpotMe = ({ selected, setSelected }) => {
  return (
    <Slide up>
      <div className='p-field'> 
        <div className='p-content'>
          <div className='p-title-cont'>
            <img src={logo} className='logo' alt='logo'/>
            <h1> SpotMe</h1>
          </div>
          <p> Group project made social media website centering around gyms and fitness. Standard posting profiles with groups and event organising and a gym searching section that allows you to find gym information. 
          </p>
          <br/>
          <p>- Javascript, React, Express, Node.js, MongoDb</p>
          <br/>
          <div className='flex'>
            <a href='https://github.com/kimbertham/SPOT.ME-PROJECT'>
              <img src={github} alt='github' className='p-icon'/>
            </a>
          </div>
        </div>

        <div className='p-divide'/>

        <video src={video} preload="auto" muted controls autoPlay
          className={selected === 'Spotme' ? 'p-select' : 'display-none'} 
          onMouseOver={e => e.target.play()}
          onMouseLeave={e =>{
            e.target.pause()
            setSelected()
          }}/>
          
        <img src={img} alt='img'
          className={selected !== 'Spotme' ? 'p-mov' : 'display-none'} 
          onMouseEnter={() => setSelected('Spotme')}/>

      </div>
    </Slide>
  )
}

export default SpotMe