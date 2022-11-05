import React from 'react'

function About(props) {
    return (
        <div className='content'>
            <h2 className={props.color === '' ? "about" : `about h2-${props.color}`}>About</h2>
            <p className={props.color === '' ? "" : `p-${props.color}`}>Inquisitive and diligent software engineer with a keen interest in simplifying anything complex. Currently working on building and deploying successful full-stack web applications. Eager to bring my tech skills and enthusiasm to a tech team and continue to develop as a software engineer.</p>
        </div>
    )
}

export default About