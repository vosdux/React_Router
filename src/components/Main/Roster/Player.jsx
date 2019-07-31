import React from 'react';
import PlayerAPI from './PlayerAPI';
import styled from 'styled-components';

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
            <Center>{player.position}</Center>
        </div>
    )
}

const Center = styled.h1`
    text-align: center;
`

export default Player;