import React from 'react'
// import photo from '../assets/photo.jpg'

function Info(props) {
    return (
        <div>
            {/* <img src={photo} alt="User's photo" width='317px' /> */}
            <div className='photo'></div>
            <h1 className={props.color === '' ? "" : `h1-${props.color}`}>Irina Petrova</h1>
            <h3 className={props.color === '' ? "title" : `title title-${props.color}`}>Full-Stack Software Engineer</h3>
            <a href="https://irinapetrova.dev" className={props.color === '' ? "link" : `link link-${props.color}`}>irinapetrova.dev</a>
            <a href="mailto:irina@theluky.com" className={props.color === '' ? "button" : `button button-${props.color}`}>Email</a>
        </div>
    )
}

export default Info