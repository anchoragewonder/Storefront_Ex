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
        fetch("https://raw.githubusercontent.com/anchoragewonder/Storefront_Ex/JSX_Integration/storefront-app/src/Gamelist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({ games: data.year });
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.games.map((gaming, index) => (
                        <Col key={index} className="mb-3" xs={6} md={4}>
                            <Card className="cardSize">
                                <Card.Img variant="top" src={gaming.Image} />
                                <Card.Body>
                                    <Card.Title>{gaming.game}</Card.Title>
                                    <LikeButton />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}



