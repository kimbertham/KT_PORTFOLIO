import React from 'react'
import github from '../../styles/assets/git-vector.jpg'
import link from '../../styles/assets/link.jpg'
import video from '../../styles/assets/projects/whurdle.mov'
import img from '../../styles/assets/projects/whurd.png'
import logo from '../../styles/assets/projects/wordle.jpg'
import Slide from 'react-reveal/Slide'


const Whurdle = ({ selected, setSelected }) => {
  return (
    <Slide up>
      <div className='p-field'>

        <div className='p-content'>
          <div className='p-title-cont'>
            <img src={logo} className='logo' alt='logo'/>
            <h1> whurdle </h1>
          </div>
          <p>Recreation of nytimes game worlde with two player capability,
            Users choose 5 letter words for each other to guess.
          </p>
          <br/>
          <p> - TypeScript, ReactJS, Node.Js, MongoDb, Socket.io</p>
          <br/>
          <div className='flex'>
            <a href="https://github.com/kimbertham/WORDLE">
              <img src={github} alt='github' className='p-icon'/> 
            </a>
            <a href="https://protected-crag-63785.herokuapp.com/"> 
              <img src={link} alt='link' className='p-icon'/>
            </a>
          </div>
        </div>

        <div className='p-divide'/>

        <video src={video} preload="auto" muted controls 
          className={selected === 'Whurdle' ? 'p-select' : 'display-none'} 
          onMouseOver={e => e.target.play()}
          onMouseLeave={e=>{
            e.target.pause()
            setSelected()
          }}
        />


        <img src={img} alt='img'
          className={selected !== 'Whurdle' ? 'p-mov' : 'display-none'} 
          onMouseEnter={() => setSelected('Whurdle')}/>

      </div>
    </Slide>
  )
}
export default Whurdle