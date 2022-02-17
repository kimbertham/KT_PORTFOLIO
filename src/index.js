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
ReactGA.pageview('/')
ReactGA.pageview(window.location.pathname + window.location.search)
ReactGA.pageview(window.location.pathname)


ReactDOM.render(<App />, document.getElementById('root'))