import React from 'react' 
import emailjs from 'emailjs-com'
import Fade from 'react-reveal/Fade'

class Contact extends React.Component {
state = {
  sent: false
}

onSubmit = async e => {
  e.preventDefault()
  await emailjs.sendForm(
    process.env.REACT_APP_service, 
    process.env.REACT_APP_template,
    e.target,
    process.env.REACT_APP_UserID)
  this.setState({ sent: true })
  setTimeout(() => this.setState({ sent: false }), 1000)
}

render() {
  const { sent } = this.state
  console.log( process.env.REACT_APP_service, )
  return (

    <div className='c-cont'>
      <div className='c-content'>
        
        <div className='relative center'>
          <div className='flex'>
            <a href='https://github.com/kimbertham'> 
              <div className='link-cont'>
                <img src={require('../styles/assets/git-vector.jpg')} alt='link' className='c-link'/>
              </div>
            </a>
            <a href='https://www.instagram.com/iemaht/'> 
              <div className='link-cont'>
                <img src={require('../styles/assets/insta.jpg')} alt='link' className='c-link'/>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/kimberley-tham/'>
              <div className='link-cont'>
                <img src={require('../styles/assets/in-vector.jpg')} alt='link' className='c-link'/>
              </div>
            </a>
          </div>

          <div className='c-title'> 
            <Fade down> <h1>CONTACT.</h1> </Fade>
          </div>
        </div>

        {sent ? 
          <div className='sent'>
            <img src={require('../styles/assets/sent.jpg')} alt='sent' className='status-icon'/>
            <p> Message sent!</p>
          </div> 
          :
          <form className='c-form' onSubmit={this.onSubmit}>
            <h2> Send a message!</h2>
            <input
              autoComplete="off"
              className='c-input'
              placeholder='Name*'
              name='from_name'/>
            <input   
              autoComplete="off"  
              placeholder='Email*'
              className='c-input'
              name='reply_to'/>
            <textarea
              autoComplete="off"
              className='c-textarea'
              name='message'
              placeholder='Leave a message and I&apos;ll get back to you asap!'/>
            <button className='c-button'> Send!</button>
          </form>
        }

      </div>
    </div>

  )
}
}
export default Contact