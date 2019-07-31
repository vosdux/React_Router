import React from 'react';
import styled from 'styled-components';

const Home = () => (
    <Div>
        <H1>Welcome to out site</H1>
        <p>This is a home page</p>
    </Div>
);

export const Div = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const H1 = styled.h1`
    margin: 0;
    font-size: 45px;

`

export default Home;