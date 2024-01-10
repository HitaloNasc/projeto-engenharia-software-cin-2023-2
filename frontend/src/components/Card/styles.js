import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: rgba(196, 196, 196, 0.38);;
    width: 225px;
    height: 270px;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 60%;
    border-radius: 12px 12px 0 0px;
`;

export const StyledName = styled.h1`
    font-size: 15px;
    overflow: hidden;
    max-width: 98%;
    white-space: nowrap;                  
    text-overflow: ellipsis;
    margin: 2px;
    color: #000;
    font-family: 'Nunito Sans', sans-serif;
`

export const StyledPrice = styled.h1`
    font-size: 15px;
    overflow: hidden;
    max-width: 98%;
    white-space: nowrap;                  
    text-overflow: ellipsis;
    margin: 2px;
    color: #9B8C00;
    font-family: 'Nunito Sans', sans-serif;
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


