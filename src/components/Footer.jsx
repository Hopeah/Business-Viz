import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

function Footer(props) {
    return (
        <footer className={props.color === '' ? "" : `footer-${props.color}`}>
            <ul>
                <li><a href="https://twitter.com/Hopeahh" className={props.color === '' ? "icon-link" : `icon-link icon-link-${props.color}`}><FaTwitterSquare size={28}/></a></li>
                <li><a href="https://www.linkedin.com/in/irina-petrova-se/" className={props.color === '' ? "icon-link" : `icon-link icon-link-${props.color}`}><FaLinkedin size={28}/></a></li>
                <li><a href="https://github.com/Hopeah" className={props.color === '' ? "icon-link" : `icon-link icon-link-${props.color}`}><FaGithubSquare size={28}/></a></li>
            </ul>
        </footer>
    )
}

export default Footer