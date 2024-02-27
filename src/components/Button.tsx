import styled from "styled-components";


export default function Button({ width = '112px', height = '48px' }) {
    let mainColor = "#0e5c67",
        hoverColor = "#0e5d676c";

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
