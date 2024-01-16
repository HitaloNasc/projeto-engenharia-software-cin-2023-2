import React from "react";
import { ContainerList } from "./styles";
import Card from "../Card";

const CardList = () => {

    const productList = require('./[listar]get-products.json');

    const cardElements = productList.map((product) => {
        return <Card product={product} />;
    });

    return (
        <ContainerList>
            {cardElements}
        </ContainerList>
    );
}

export default CardList;