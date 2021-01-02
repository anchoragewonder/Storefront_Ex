import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { LikeButton } from './like_button';

export class VideoGameGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <LikeButton></LikeButton>
                    </Col>
                    <Col xs={6} md={4}>
                        <LikeButton></LikeButton>
                    </Col>
                    <Col xs={6} md={4}>
                        <LikeButton></LikeButton>
                    </Col>
                </Row>
            </Container>
        )
    }
}