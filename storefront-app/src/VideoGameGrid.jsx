import React from "react";
import { LikeButton } from './like_button';

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
        console.log(data);
        return data.results;
    }

    async componentDidMount() {
        const gameData = await this.getGames();
        this.setState({ games: gameData });
    }

    render() {
        return (
            <div>
                {this.state.games.map((gaming) => (
                    <div xs={6} md={4}>
                        <h4>{gaming.year.game}</h4>
                        <img src={gaming.year.Image} />
                        <LikeButton />
                    </div>
                ))}
            </div>
        );
    }
}