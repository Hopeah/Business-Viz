import React from 'react'

function Interests(props) {
    const { color } = props

    return (
        <div className='content'>
            <h2 className={color ? `h2-${color}` : ""}>Interests</h2>
            <p className={color ? `p-${color}` : ""}>Front-end. Back-end. Databases. Learning. Teaching. Sweets. Gaming. Fantasy. Books. Movies.</p>
        </div>
    )
}

export default Interests