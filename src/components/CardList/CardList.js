import React from "react";
import { ContainerList } from "./styles";
import Card from "../Card/Card";
const CardList = () => {
    const dataCard = require('./[listar]get-products.json');
    const renderList = dataCard.map(card => {
        return <Card name={card.name} price={card.price} image={card.images[0].image}/>
    }); 
    return(
        <ContainerList> 
            {renderList}
        </ContainerList>
    );
}

export default CardList;