import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #f5f4f6;
    width: 500px;
    height: 180px;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    cursor: pointer;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px 12px 0 0px;
`;

export const StyledName = styled.h1`
    font-size: 18px;
    overflow: hidden;
    max-width: 98%;
    white-space: nowrap;                  
    text-overflow: ellipsis;
    margin: 2px;
    color: #000;
    font-family: 'Nunito Sans', sans-serif;
`

export const StyledDescription = styled.h1`
    font-size: 16px;
    overflow: hidden;
    max-width: 98%;
    white-space: nowrap;                  
    text-overflow: ellipsis;
    margin: 2px;
    color: #9B8C00;
    font-family: 'Nunito Sans', sans-serif;
`

export const StyledPrice = styled.h1`
    font-size: 18px;
    overflow: hidden;
    max-width: 98%;
    white-space: nowrap;                  
    text-overflow: ellipsis;
    margin: 2px;
    color: #000;
    font-family: 'Nunito Sans', sans-serif;
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 50%;
`;


