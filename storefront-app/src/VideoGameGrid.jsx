import React from "react";
import { LikeButton } from './like_button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./VideoGameGrid.css"
var dict;

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
                this.getYears = this.getYears.bind(this);
                this.setState({ games: data.games });

            })
    }

    getYears() {
        dict = {};
        for (let i = 0; i < this.state.games.length; i++) {
            const currentGame = this.state.games[i];
            const currentYear = currentGame.year
            if (!(currentYear in dict)) {
                dict[currentYear] = [];
            }
            dict[currentYear].push(currentGame);
        }
        // return pushed values sorted by year
        return dict;
    }


    render() {

        let listByYear = {};
        listByYear = this.getYears();
        console.log(listByYear);

        return (
            <div>
                {Object.keys(listByYear).map((releaseYear, index) => {
                    return (
                        <Container id={releaseYear} key={index}>
                            <h2>{releaseYear}</h2>
                            <Row>

                                {listByYear[releaseYear].map((gameEntry, index) => {
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
        )
    }
}

