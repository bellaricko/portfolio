import React from 'react';
import PropTypes from 'prop-types'
import './Card.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.date,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
}

const RandomBorderColor = () => {
    let ColorValues = ["#FFAAAA", "#D46A6A", "#801515", "#669999", "#407F7F"];
    return ColorValues[Math.floor(Math.random() * ColorValues.length)];
}

const CategoryIcon = (value) => {
    if (value === "Project") {
        return faCoffee;
    }

    else if (value === "Blog") {
        return faAdjust;
    }

    else {
        return faCamera;
    }
}

const Card = (props) => {
    return (
        <div className="cards" style={{ borderTopColor: RandomBorderColor(), borderTopWidth: 6, borderTopStyle: "solid" }}>
            <h4><FontAwesomeIcon icon={CategoryIcon(props.card.category)} /> {props.card.title}</h4>
            <ul>
                <li>Upplagd {props.card.date}</li>
                <li><a href={props.card.link}>GitHub</a></li>
            </ul>
            <p>{props.card.text}</p>
        </div>
    )
}

Card.propTypes = propTypes

export default Card