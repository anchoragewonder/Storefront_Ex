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
                this.setState({ games: data.yearlist });
            })
    }

    render() {
        return (
            <div>
                {this.state.games.map((gameyear, index) => {
                    return (
                        <Container id={gameyear} key={index}>
                            <Row>
                                {this.state.games.gameyear.map((gameEntry, index) => {
                                    return (
                                        <Col key={index} className="mb-3" xs={6} md={4}>
                                            <Card className="cardSize">
                                                <Card.Img variant="top" src={gameEntry.Image} />
                                                <Card.Body>
                                                    <Card.Title>{gameEntry.game}</Card.Title>
                                                    <LikeButton />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    );
                })}
            </div>
        );
    }
}

