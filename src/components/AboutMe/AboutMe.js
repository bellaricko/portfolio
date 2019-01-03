import React from 'react';
import './Aboutme.scss';

const skills = [{
    name: "CSS",
    value: "90%",
    color: "blue"
},
{
    name: "HTML",
    value: "50%",
    color: "yellow"
},
{
    name: "Sociala medier",
    value: "20%",
    color: "red"
}
];

const Skillbar = (props) => {
    return (
        <div className="container">
            <div style={{ backgroundColor: props.skill.color, width: props.skill.value }}>{props.skill.name}</div>
        </div>
    )
}

const AboutMe = () => {
    return (
        <div>
            <h2>Färdigheter</h2>
            <div>
                <div className="container-skills">
                    {skills.map((skill) => <Skillbar skill={skill}></Skillbar>)}
                </div>
                <div className="container-pitch">
                    <h2>USP</h2>
                    <p>Min "pitch" och vem jag är.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe