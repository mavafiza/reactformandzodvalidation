import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MyFooter = styled.footer`
background-color: #202027;
    height: 10vh;
    font-family: 'Poppins',sans-serif;
    display: flex;
    justify-content: space-around;
    z-index: 100;
    position: relative;
`;

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Li = styled.li`
    margin-right: 20px;
`;

export const MyImg = styled.img`
    width: 15px;
    height: auto;
    margin-right: 5px;
`;

export const MyLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-right: 2px;
    &:hover {
        color: #8080b8;
    }

`;

export const MyImgFb = styled.img`
    width: 20px;
    height: auto;
    filter: invert(100%); 
    margin-right: 5px;

`;

