import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/projects/Projcts'
import Contact from './components/Contact'
import SideMenu from './components/SideMenu'

class App extends React.Component {
  state = {
    side: false
  }

  section = s => {
    this[s].scrollIntoView({ behavior: 'smooth' })  
  }

  render() {
    console.log(process.env)
    return (
      <div>

        <SideMenu section={this.section}/>
        
        <ParallaxProvider>
          <Banner section={this.section}/>
        </ParallaxProvider>

        <div ref={l => this.about = l}>
          <About/>
        </div>
        <div ref={l => this.skills = l}>
          <Skills />
        </div>
        <div ref={l => this.projects = l}>
          <Projects/>
        </div>
        <div  ref={l => this.contact = l}>
          <Contact/>
        </div>

        <div className='footer'>
          <p>Thanks for stopping by</p>
          <p> KIMBERELY THAM PORTFOLIO 2021</p>
        </div>
      </div>
    )
  }
}

export default App
