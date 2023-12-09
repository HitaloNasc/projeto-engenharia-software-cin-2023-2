import React from "react";
import { ContainerList } from "./styles";
import Card from "../Card/Card";

const CardList = () => {

    const productList = require('./[listar]get-products.json');

    const cardElements = productList.map(({ name, price, images }) => {
        return <Card key={name} name={name} price={price} image={images[0].image} />;
    });

    return (
        <ContainerList>
            {cardElements}
        </ContainerList>
    );
}

export default CardList;