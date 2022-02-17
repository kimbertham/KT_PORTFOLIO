import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import './styles/about.scss'
import './styles/banner.scss'
import './styles/skills.scss'
import './styles/projects.scss'
import './styles/contact.scss'
import App from './App'

import ReactGA from 'react-ga'
const TRACKING_ID = 'UA-203452834-1'

ReactGA.initialize(TRACKING_ID)


ReactDOM.render(<App />, document.getElementById('root'))