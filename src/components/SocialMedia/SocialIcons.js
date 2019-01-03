import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFlickr } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
    return (
        <div>
            <ul id="nav" >
                <li><a href="index.html#AboutMe"><FontAwesomeIcon icon={faBookOpen} /> Curriculum Vitae</a></li>
                <li><a target="_blank" href="https://www.flickr.com"><FontAwesomeIcon icon={faFlickr} /> Flickr</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/izabella-lönnqvist-91989253"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                <li><a target="_blank" href="https://github.com/bellaricko"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</a></li>
            </ul >
        </div>
    )
}

export default SocialIcons