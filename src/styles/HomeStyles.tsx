import styled from "styled-components";

export const MyH2 = styled.h2`
    color: white;
    font-size: 2.5em;
    font-weight: 400;
    display: flex;
    padding-top: 120px;
`;


export const MyImgHome = styled.img`
    margin-top: 12%;
    width: 42%;
    height: auto;
    z-index: 100;
    position: relative; 
`;

export const FlexRow = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-direction: row;
    gap: 10%;
`;

export const FlexColHome = styled.div`
    margin: 0 auto;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;