import React from 'react'
// import photo from '../assets/photo.jpg'

function Info() {
    return (
        <div>
            {/* <img src={photo} alt="User's photo" width='317px' /> */}
            <div className='photo'></div>
            <h1>Irina Petrova</h1>
            <h3 className='title'>Full-Stack Software Engineer</h3>
            <a href="https://irinapetrova.dev" className='link'>irinapetrova.dev</a>
            <a href="mailto:irina@theluky.com" class='button'>Email</a>
        </div>
    )
}

export default Info