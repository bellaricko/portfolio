import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
    return (
        <div>
            <ul id="nav" >
                <li><a target="_blank" href="https://www.linkedin.com/in/izabella-lönnqvist-91989253"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                <li><a target="_blank" href="https://github.com/bellaricko"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</a></li>
            </ul >
        </div>
    )
}

export default SocialIcons