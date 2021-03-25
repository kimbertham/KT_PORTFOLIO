import React from 'react'  
import Fade from 'react-reveal/Fade'
import Snake from './Snake'
import Nosedive from './Nosedive'
import MatchUs from './Matchus'
import SpotMe from './SpotMe'
import MoviRate from './MovieRate'

class Projects extends React.Component {
  state = {
    selected: false
  }

  setSelected = (s) => {
    this.setState({ selected: s ? s : null })
  }

  render() {
    const { selected } = this.state
    return (
      <div className='p-cont'> 

        <div className='p-title'>
          <Fade left>
            <h1>PROJECTS.</h1> 
            <p> → Hover over images to play</p>
          </Fade> 
        </div>  

        <div>
          <MatchUs 
            selected={selected} 
            setSelected={this.setSelected}/>
          <Nosedive 
            selected={selected} 
            setSelected={this.setSelected}/>
          <MoviRate 
            selected={selected} 
            setSelected={this.setSelected}/>
          <Snake 
            selected={selected} 
            setSelected={this.setSelected}/>
          <SpotMe 
            selected={selected} 
            setSelected={this.setSelected}/>
        </div>   
      </div>
    )
  }
}
export default Projects
