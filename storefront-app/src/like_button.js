import React from "react";
import './LikeButton.css';

export class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this game!';
        }
        return (
            <button className='Button' onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        )
    }
}


