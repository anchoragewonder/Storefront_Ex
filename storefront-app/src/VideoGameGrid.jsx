import React from "react";
import { LikeButton } from './like_button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./VideoGameGrid.css"


export class VideoGameGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
        };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/anchoragewonder/Storefront_Ex/Navbar_Extra_Features/storefront-app/src/Gamelist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({ games: data.games });
            })
    }

    getYears() {
        dict = new Object();
        for (i = 0; i < games.length; i++) {
            let currentGame = games[i];
            let currentYear = games.year
            if (!(currentYear in dict)) {
                dict[currentYear] = [];
            }
            dict[currentYear].push(currentGame);
        }
        // check the dictionary
        console.log(dict);
    }

    render() {
        return (
            <div>
                {dict.map((releaseDate, index) => {
                    return (
                        <Container id={releaseDate} key={index}>
                            <h2>{releaseDate}</h2>
                            <Row>
                                {this.state.games.map((gameEntry, index) => {
                                    return (
                                        <Col key={index} className="mb-3" xs={6} md={4}>
                                            <Card className="cardSize">
                                                <Card.Img variant="top" src={gameEntry.image} />
                                                <Card.Body>
                                                    <Card.Title>{gameEntry.game}</Card.Title>
                                                    <LikeButton />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    )
                })}
            </div>
        );
    }
}

