import React from 'react'
import github from '../../styles/assets/git-vector.jpg'
import link from '../../styles/assets/link.jpg'
import video from '../../styles/assets/projects/match.mov'
import img from '../../styles/assets/projects/match.png'
import logo from '../../styles/assets/projects/logo-dark.jpg'
import Slide from 'react-reveal/Slide'


const Matchus = ({ selected, setSelected }) => {
  return (
    <Slide up>
      <div className='p-field'>

        <div className='p-content'>
          <div className='p-title-cont'>
            <img src={logo} className='logo' alt='logo'/>
            <h1> MatchUs</h1>
          </div>
          <p>A dating website that lets couples swipe for matches on food, activities and food locations similar to tinder. Also allows users to keep track of dates with calendar and map sections, send love notes, add items to wishlists and generate date plans based on matches or randomly.
          </p>
          <br/>
          <p> - Javascript, ReactJS, Python, Django, PostgreSQL.</p>
          <br/>
          <div className='flex'>
            <a href="https://github.com/kimbertham/MATCH_US_PROJ">
              <img src={github} alt='github' className='p-icon'/> 
            </a>
            <a href="https://match-uss.herokuapp.com/login"> 
              <img src={link} alt='link' className='p-icon'/>
            </a>
          </div>
        </div>

        <div className='p-divide'/>

        <video src={video} preload="auto" muted controls
          className={selected === 'MoviRate' ? 'p-select' : 'display-none'} 
          autoPlay
          onMouseLeave={e=>{
            e.target.pause()
            setSelected()
          }}/>

        <img src={img} alt='img'
          className={selected !== 'MoviRate' ? 'p-mov' : 'display-none'} 
          onMouseEnter={() => setSelected('MoviRate')}/>

      </div>
    </Slide>
  )
}
export default Matchus