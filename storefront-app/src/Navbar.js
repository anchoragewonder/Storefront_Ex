import Nav from 'react-bootstrap/Nav';
import React from 'react';

export class YearNav extends React.Component {
    render() {
        return (
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" href="#2020">2020</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" href="#2019">2019</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

// need to replace year 1 and 2 with refrence to game year in the video game grid class