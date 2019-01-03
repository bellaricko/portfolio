import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import './index.scss';
import SocialIcons from './components/SocialMedia/SocialIcons';
import Card from './components/Card/Card';
import AboutMe from './components/AboutMe/AboutMe';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Portfolio extends React.Component {
    render() {
        const cards = [
            {
                title: "Tic Tac Toe",
                text: "Mitt första projekt i React.js, spelet Tic Tac Toe.",
                link: "https://github.com/bellaricko/tictactoe",
                category: "Project"
            },
            {
                title: "ToDo-list",
                text: "En enkel ToDo-list i React.js.",
                link: "https://github.com/bellaricko/todolist",
                category: "Project"
            },
            {
                title: "Portfolio",
                text: "Den här portfolion byggd i React.js.",
                link: "https://github.com/bellaricko/portfolio",
                category: "Project"
            },
            {
                title: "Ett annat test",
                text: "Testar",
                link: "",
                category: "Blog"
            },
            {
                title: "Under konstruktion!",
                text: "Den här portfolion är under uppbyggnad.",
                link: "",
                category: "Blog"
            }
        ]

        return (
            <div>
                <div className="section">
                    <div className="landing-page">
                        <div className="section">
                            <div className="title animation-target-welcome">Hej!</div>
                        </div>
                        <div className="section">
                            <div className="tagline">Izabella Lönnqvists portfolio</div>
                            <SocialIcons />
                            <div className="link-to-projects">
                                <a href="index.html#Projects"><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
                            </div>
                        </div>
                    </div>
                    <ScrollableAnchor id={'Projects'}>
                        <div className="content projects">
                            <h1>Mina projekt</h1>
                            {cards.map((card) => <Card card={card}></Card>)}
                        </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'AboutMe'}>
                        <div className="content about-me">
                            <h1>Curriculum vitae</h1>
                            <AboutMe />
                        </div>
                    </ScrollableAnchor>
                </div>
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
);