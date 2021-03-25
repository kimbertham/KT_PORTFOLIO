import React from 'react'
import about from '../styles/assets/menu/about.jpg'
import cog from '../styles/assets/menu/cog.jpg'
import light from '../styles/assets/menu/light.jpg'
import contact from '../styles/assets/menu/contact.jpg'
import menu from '../styles/assets/menu/menu.jpg'

import git from '../styles/assets/git-vector.jpg'
import linked from '../styles/assets/in-vector.jpg'

class SideMenu extends React.Component { 
  state = {
    icons: false
  }

  toggleIcons = () => {
    this.setState({ icons: !this.state.icons })
  }

  render() {
    const { icons } = this.state
    const { section } = this.props

    const iclass = icons ? 'side-icon' : 'display-none' 

    return (
      
      <div className='side-menu'>  
        <div>
          <img src={menu} alt='menu' className='side-icon' onClick={this.toggleIcons} />
          <img src={about} alt='about' className={iclass} onClick={() => section('about')}/>
          <img src={cog} alt='skills' className={iclass} onClick={() => section('skills')}/>
          <img src={light} alt='projects' className={iclass} onClick={() => section('projects')}/>
          <img src={contact} alt='contact' className={iclass} onClick={() => section('contact')}/>
        </div>      

        <div className='side-links'>
          <a href='https://github.com/kimbertham'> 
            <img src={git} alt='git' className={iclass}/>
          </a>
          <a href='https://www.linkedin.com/in/kimberley-tham/'>
            <img src={linked}  alt='linkedin' className={iclass}/>
          </a>
        </div>
  
      </div>
    )
  }
}
export default SideMenu