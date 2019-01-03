import React from 'react';
import './Aboutme.scss';

const skills = [{
    name: "CSS",
    value: "90%",
    color: "pink"
},
{
    name: "HTML",
    value: "50%",
    color: "pink"
},
{
    name: "Sociala medier",
    value: "40%",
    color: "pink"
},
{
    name: "React.js",
    value: "20%",
    color: "pink"
},
{
    name: "JavaScript",
    value: "10%",
    color: "pink"
},
{
    name: "Adobe Creative Suit",
    value: "80%",
    color: "pink"
},
];

const Skillbar = (props) => {
    return (
        <div className="container">
            <div style={{ backgroundColor: props.skill.color, width: props.skill.value }}><p>{props.skill.name}</p></div>
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
                    <h2>Om mig</h2>
                    <p>Aspirerande frontend-utvecklare. Den här portfolion är ett hobbyprojekt för att lära mig React.js, och uppdatera mina kunskaper i CSS och HTML.</p>
                    <ul>
                        <li>Jag gillar matlagning.</li>
                        <li>Jag har lite för många palettblad hemma.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe