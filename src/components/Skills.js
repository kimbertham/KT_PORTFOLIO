import React from 'react' 
import Fade from 'react-reveal/Fade'

const Skills = () => {
  return (
    <>

      <div className='skills-cont'>
        <div className='content'>
          <div className='s-title'>
            <Fade right>
              <h1> SKILLS.</h1>
            </Fade>
          </div>
          
          <div>
            <img src={require('../styles/assets/skills/html.jpg')} alt='s-icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/css.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/sass.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/Js.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/python.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/React.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/node.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/django.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/express.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/mongo.jpg')} alt='icon' className='s-icon'/>
          </div>
          <div>
            <img src={require('../styles/assets/skills/gith.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/git.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/heroku.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/postgres.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/npm.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/yarn.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/slack.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/netlify.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/ps.jpg')} alt='icon' className='s-icon'/>
            <img src={require('../styles/assets/skills/vscode.jpg')} alt='icon' className='s-icon'/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Skills