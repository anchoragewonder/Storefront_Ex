import React from "react";
import Col from 'react-bootstrap/Col'
import { LikeButton } from './like_button';


const gameList = ({ name, link }) => (
    <div xs={6} md={4}>
        <h4>{name}</h4>
        <img src={link} />
        <LikeButton />
    </div>
);

export class VideoGameGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
        };

        this.getGames = this.getGames.bind(this);
    }

    async getGames() {
        const res = await fetch(`https://raw.githubusercontent.com/anchoragewonder/Storefront_Ex/JSX_Integration/storefront-app/src/Gamelist.json`);
        const data = await res.json();
        console.log(data)
        return data.results;
    }

    async componentDidMount() {
        const gameData = await this.getGames();
        this.setState({ games });
    }

    render() {
        return (
            <div>
                {this.state.games.map(() => (
                    <gameList
                        name={`${games.game}`}
                        link={`${games.Image}`}
                    />
                ))}
            </div>
        );
    }
}