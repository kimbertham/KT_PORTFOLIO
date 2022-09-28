import React from 'react'  
import Fade from 'react-reveal/Fade'
import Snake from './projects/Snake'
import Nosedive from './projects/Nosedive'
import MatchUs from './projects/Matchus'
import SpotMe from './projects/SpotMe'
import Whurdle from './projects/Whurdle'
import MoviRate from './projects/MovieRate'
import DayPlanner from './projects/Dayplanner'


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
          <DayPlanner
            selected={selected} 
            setSelected={this.setSelected}/>
          <Whurdle
            selected={selected} 
            setSelected={this.setSelected}/>
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
