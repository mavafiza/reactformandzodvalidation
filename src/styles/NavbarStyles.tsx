import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Ul = styled.ul`
    padding-top: 5%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LiLeft = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20%;
`;

export const LiRight = styled.li`
display: flex;
    flex-direction: row;
    align-items: center;
    width: 18%;
    gap: 25%;
`;

/* export const MyImg = styled.img`
    width: 50px;
    height: auto;
`; */

export const MyNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-weight: 300;

    &:hover {
        color: #202027;
    }

    &.active {
        font-weight: bold;
    }
`;