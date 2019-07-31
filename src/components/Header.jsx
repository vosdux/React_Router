import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
    <header>
        <Nav>
            <Menu>
                <li><A to='/'>Home</A></li>
                <li><A to='/roster'>Roster</A></li>
                <li><A to='/schedule'>Schedule</A></li>
            </Menu>
        </Nav>
    </header>
);

const Nav = styled.nav`
    width: 100%;
    height: 50px;
    background-color: #1976D2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    height: 50px;
    width: 40%;
`
const A = styled(Link)`
    color: #fff;
    text-decoration: none;
`

export default Header;