import React from 'react' 
import portrait from '../styles/assets/2.gif'
import Roll from 'react-reveal/Roll'
import Fade from 'react-reveal/Fade'

const About = () => {

  return (
    <div className='a-cont'>    

      <div className='img-cont'>
        <img src={portrait} className='a-img1' alt='portrait'/>
        <img src={portrait} className='a-img' alt='portrait'/>
      </div>
          
      <div className='center'>
        <Fade down>
          <div className='title-cont'>
            <h1 className='title'>ABOUT.</h1>
          </div>
        </Fade>
      </div>

      <Roll up>
        <div className='a-desc'>
          <div className='a-line'/>
          <h1> Most people call me Kim</h1>
          <p>In having decided to pursue my interest in coding and programming I enrolled myself into a three month intensive software engineering course at General Assembly, London. During this time was able to develop a real understanding of web development fundamentals, which only worked to further excitement about the constantly evolving world of tech. I aspire to further expand my coding knowledge and make dedicated contributions to the best of my ability.</p>
          <br/>
          <p>Feel free to drop drop me and email or reach out to me on other platforms, I&apos;d love to hear from you!</p>
          <div className='a-line'/>
        </div>
      </Roll>

    </div>
  )
}
export default About