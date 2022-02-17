import React from 'react' 
import Fade from 'react-reveal/Fade'

import css from '../styles/assets/skills/html.jpg'
import html from '../styles/assets/skills/html.jpg'
import Js from '../styles/assets/skills/Js.jpg'
import ts from '../styles/assets/skills/ts.jpg'
import node from '../styles/assets/skills/node.jpg'
import express from '../styles/assets/skills/express.jpg'
import react from '../styles/assets/skills/React.jpg'
import redux from '../styles/assets/skills/redux.jpg'
import python from '../styles/assets/skills/python.jpg'
import django from '../styles/assets/skills/django.jpg'
import postgres from '../styles/assets/skills/postgres.jpg'
import mongo from '../styles/assets/skills/mongo.jpg'
import jest from '../styles/assets/skills/jest.jpg'
import sass from '../styles/assets/skills/sass.jpg'
import git from '../styles/assets/skills/git.jpg'
import gith from '../styles/assets/skills/gith.jpg'
import jira from '../styles/assets/skills/jira.jpg'
import heroku from '../styles/assets/skills/heroku.jpg'
import slack from '../styles/assets/skills/slack.jpg'
import netlify from '../styles/assets/skills/netlify.jpg'
import webflow from '../styles/assets/skills/webflow.jpg'
import ps from '../styles/assets/skills/ps.jpg'

const Skills = () => {

  const list = [css, html, Js, ts, node, express, react, redux, python, django, postgres, mongo, jest, sass, git, gith, jira, heroku, slack, netlify, webflow, ps]
  return (
    <>
      <div className='skills-cont'>
        <div className='content'>
          <div className='s-title'>
            <Fade right>
              <h1> SKILLS.</h1>
            </Fade>
          </div>
          

          <div className='skills'>
            {list.map(l => 
              <img key={l} src={l} alt='s-icon' className='s-icon'/>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
export default Skills