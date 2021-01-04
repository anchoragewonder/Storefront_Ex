import React from "react";
import { LikeButton } from './like_button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
                        <Col key={index} className="col-auto mb-3">
                            <Card style={{ width: '20vw' }}>
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



