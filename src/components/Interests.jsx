import React from 'react'

function Interests(props) {
    return (
        <div className='content'>
            <h2 className={props.color === '' ? "" : `h2-${props.color}`}>Interests</h2>
            <p className={props.color === '' ? "" : `p-${props.color}`}>Front-end. Back-end. Databases. Learning. Teaching. Sweets. Gaming. Fantasy. Books. Movies.</p>
        </div>
    )
}

export default Interests