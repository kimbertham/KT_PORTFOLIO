import React from 'react'  
import Fade from 'react-reveal/Fade'
import Snake from './Snake'
import Nosedive from './Nosedive'
import MatchUs from './Matchus'
import SpotMe from './SpotMe'
import MoviRate from './MovieRate'

class Projects extends React.Component {
  state = {
    selected: false,
    loaded: 0
  }

  setSelected = (s) => {
    this.setState({ selected: s ? s : null })
  }

  setLoading = () => {
    this.setState({ loaded: this.state.loaded + 1 })
  }

  render() {
    const { selected, loaded } = this.state
    console.log(loaded)
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
            setLoading={this.setLoading}
            setSelected={this.setSelected}/>
          <Nosedive 
            selected={selected} 
            setLoading={this.setLoading}
            setSelected={this.setSelected}/>
          <MoviRate 
            selected={selected} 
            setLoading={this.setLoading}
            setSelected={this.setSelected}/>
          <Snake 
            selected={selected} 
            setLoading={this.setLoading}
            setSelected={this.setSelected}/>
          <SpotMe 
            selected={selected} 
            setLoading={this.setLoading}
            setSelected={this.setSelected}/>
        </div>   
      </div>
    )
  }
}
export default Projects
