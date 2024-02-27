import React from 'react';
import styled from "styled-components";


export default function Button({ width = '112px', height = '48px' }) {
    let mainColor = "#17a751",
        hoverColor = "#0e7843";

    const JoinButton = styled.button`
        background-color: ${mainColor};
        color: white;
        width: ${width};
        height: ${height};
        border-radius: 5px;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: ${hoverColor};
        }
    `;

    return (
        <JoinButton>Join Now</JoinButton>
    );
}
