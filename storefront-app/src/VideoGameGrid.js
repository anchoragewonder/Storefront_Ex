import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { LikeButton } from './like_button';
import { GameImg } from './GameImg';

export class VideoGameGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div xs={6} md={4}>
                <GameImg />
                <LikeButton />
            </div>
        )
    }
}