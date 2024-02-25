import styled from 'styled-components';

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div.search {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    > div.search input[type="text"] {
        width: 70%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #ccc;
        outline: none;
        font-size: 16px;
        color: #333;
    }

    > div.search button {
        background-color: #bd2d4e;
        border: none;
        border-radius: 20px;
        outline: none;
        cursor: pointer;
        margin-left: 10px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    > div.search button:hover {
        background-color: red;
    }

    > div.search button svg {
        fill: #fff;
        width: 20px;
        height: 20px;
    }

    > div.cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
`;
