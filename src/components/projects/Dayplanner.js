import React from 'react'
import github from '../../styles/assets/git-vector.jpg'
import link from '../../styles/assets/link.jpg'
import img from '../../styles/assets/projects/match.png'
import logo from '../../styles/assets/projects/logo-dark.jpg'
import Slide from 'react-reveal/Slide'


const DayPlanner = ({ selected, setSelected }) => {
  return (
    <Slide up>
      <div className='p-field'>

        <div className='p-content'>
          <div className='p-title-cont'>
            {/* <img src={logo} className='logo' alt='logo'/> */}
            <h1> DayPlanner <small>(Ongoing)</small> </h1>
          </div>
          <p>Multi section DayPlanner app to help users organise their finances, groceries, journal, habits and tasks.
          </p>
          <br/>
          <p> - TypeScript, Node.Js, MongoDb, Redux.</p>
          <br/>
          <div className='flex'>
            <a href="https://github.com/kimbertham/DAY_PLANNER">
              <img src={github} alt='github' className='p-icon'/> 
            </a>
            {/* <a href="https://match-uss.herokuapp.com/login"> 
              <img src={link} alt='link' className='p-icon'/>
            </a> */}
          </div>
        </div>

        <div className='p-divide'/>
        {/* 
        <video src={video} preload="auto" muted controls 
          className={selected === 'DayPlanner' ? 'p-select' : 'display-none'} 
          onMouseOver={e => e.target.play()}
          onMouseLeave={e=>{
            e.target.pause()
            setSelected()
          }}
        /> */}


        <div
          className='p-mov'>
          {/* // className={selected !== 'DayPlanner' ? 'p-mov' : 'display-none'} 
          // onMouseEnter={() => setSelected('DayPlanner')}> */}
            TBA
        </div>

      </div>
    </Slide>
  )
}
export default DayPlanner