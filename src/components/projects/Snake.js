import React from 'react' 
import github from '../../styles/assets/git-vector.jpg'
import link from '../../styles/assets/link.jpg'
import video from '../../styles/assets/projects/snake.mov'
import img from '../../styles/assets/projects/snake.png'
import logo from '../../styles/assets/projects/snake.jpg'

import Slide from 'react-reveal/Slide'

const Snake = ({ selected, setSelected }) => {
  return (
    <Slide up>
      <div className='p-field'>

        <div className='p-content'>
          <div className='p-title-cont'>
            <img src={logo} className='logo' alt='logo'/>
            <h1> Laser Snake</h1>
          </div>
          <p>Recreation of classic snake game with twist, consume the fruit while avoiding and destroying bombs using snake lasers. </p>
          <br/>
          <p> -Javascript</p>
          <br/>
          <div className='flex'>
            <a href='https://github.com/kimbertham/LASER_SNAKE-PROJECT'>
              <img src={github} alt='github' className='p-icon'/>
            </a>
            <a href='https://kimbertham.github.io/LASER_SNAKE-PROJECT/'>
              <img src={link} alt='link' className='p-icon'/>
            </a>
          </div>
        </div>

        <div className='p-divide'/>

        <video src={video} preload="auto"
          className={selected === 'Snake' ? 'p-select' : 'display-none'} 
          autoPlay muted  onMouseLeave={setSelected}/>
          
        <img src={img} alt='img'
          className={selected !== 'Snake' ? 'p-mov' : 'display-none'} 
          onMouseEnter={() => setSelected('Snake')}/>

      </div>
    </Slide>
  )
}

export default Snake
