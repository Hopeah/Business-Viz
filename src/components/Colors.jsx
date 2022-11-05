import React from 'react'
import { FaPaintBrush } from 'react-icons/fa'

function Colors(props) {
    return (
        <div className='brushes'>
            <span onClick={() => props.changeColor('')}><FaPaintBrush size={28} color={'pink'}/></span>
            <span onClick={() => props.changeColor('red')}><FaPaintBrush size={28} color={'orange'}/></span>
            <span onClick={() => props.changeColor('blue')}><FaPaintBrush size={28} color={'blue'}/></span>
            <span onClick={() => props.changeColor('green')}><FaPaintBrush size={28} color={'green'}/></span>
            <span onClick={() => props.changeColor('black')}><FaPaintBrush size={28}/></span>
        </div>
    )
}

export default Colors