import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

function Footer(props) {
    const { color } = props

    return (
        <footer className={color ? `footer-${color}` : ""}>
            <ul>
                <li><a href="https://twitter.com/Hopeahh" className={color ? `icon-link icon-link-${color}` : "icon-link"}><FaTwitterSquare size={28}/></a></li>
                <li><a href="https://www.linkedin.com/in/irina-petrova-se/" className={color ? `icon-link icon-link-${color}` : "icon-link"}><FaLinkedin size={28}/></a></li>
                <li><a href="https://github.com/Hopeah" className={color ? `icon-link icon-link-${color}` : "icon-link"}><FaGithubSquare size={28}/></a></li>
            </ul>
        </footer>
    )
}

export default Footer