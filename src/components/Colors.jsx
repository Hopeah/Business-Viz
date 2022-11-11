import React from 'react'
import { FaPaintBrush } from 'react-icons/fa'

function Colors(props) {
    return (
        <div className='brushes'>
            <p onClick={() => props.changeColor('')}><FaPaintBrush size={28} color={'pink'}/></p>
            <p onClick={() => props.changeColor('red')}><FaPaintBrush size={28} color={'orange'}/></p>
            <p onClick={() => props.changeColor('blue')}><FaPaintBrush size={28} color={'blue'}/></p>
            <p onClick={() => props.changeColor('green')}><FaPaintBrush size={28} color={'green'}/></p>
            <p onClick={() => props.changeColor('black')}><FaPaintBrush size={28}/></p>
        </div>
    )
}

export default Colors