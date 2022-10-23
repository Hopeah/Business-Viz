import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <ul>
                <li><a href="https://twitter.com/Hopeahh"><FaTwitterSquare size={28}/></a></li>
                <li><a href="https://www.linkedin.com/in/irina-petrova-se/"><FaLinkedin size={28}/></a></li>
                <li><a href="https://github.com/Hopeah" class="bi bi-github link-info fs-3 mx-3"><FaGithubSquare size={28}/></a></li>
            </ul>
        </footer>
    )
}

export default Footer