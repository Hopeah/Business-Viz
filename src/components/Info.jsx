import React from 'react'
// import photo from '../assets/photo.jpg'

function Info(props) {
    const { color } = props

    return (
        <div>
            {/* <img src={photo} alt="User's photo" width='317px' /> */}
            <div className='photo'></div>
            <h1 className={color ? `h1-${color}` : ""}>Irina Petrova</h1>
            <h3 className={color ? `title title-${color}` : "title"}>Full-Stack Software Engineer</h3>
            <a href="https://irinapetrova.dev" className={color ? `link link-${color}` : "link"}>irinapetrova.dev</a>
            <a href="mailto:irina@theluky.com" className={color ? `button button-${color}` : "button"}>Email</a>
        </div>
    )
}

export default Info