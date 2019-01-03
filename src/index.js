import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SocialIcons from './components/SocialIcons';
import Card from './components/Card/Card';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Portfolio extends React.Component {
    render() {
        const cards = [
            {
                title: "Tic Tac Toe",
                date: "2018-12-27",
                text: "Mitt första projekt i React.js, spelet Tic Tac Toe.",
                link: "https://github.com/bellaricko/tictactoe",
                category: "Project"
            },
            {
                title: "ToDo-list",
                date: "2018-12-28",
                text: "En enkel ToDo-list i React.js.",
                link: "https://github.com/bellaricko/todolist",
                category: "Project"
            },
            {
                title: "Portfolio",
                date: "2018-12-27",
                text: "Den här portfolion byggd i React.js.",
                link: "https://github.com/bellaricko/portfolio",
                category: "Project"
            },
            {
                title: "Ett annat test",
                date: "2018-12-28",
                text: "Testar",
                link: "github.com",
                category: "Blog"
            }
        ]

        return (
            <div>
                <div className="section group">
                    <div className="landing-page">
                        <div className="section">
                            <div className="title animation-target">Hej!</div>
                        </div>
                        <div className="section">
                            <div className="tagline">Izabella Lönnqvists portfolio</div>
                            <SocialIcons />
                            <div className="link-to-projects">
                                <a href="index.html#Projects"><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="section group" id="Projects">
                        <div className="span_4_of_4 content">
                            <h2>Mina projekt</h2>
                            {cards.map((card) => <Card card={card}></Card>)}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


// ========================================

ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
);