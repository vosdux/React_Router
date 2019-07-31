import React from 'react';
import PlayerAPI from './PlayerAPI';

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, player not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h1>{player.positions}</h1>
        </div>
    )
}

export default Player;