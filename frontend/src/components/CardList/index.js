import React, { useEffect,useState } from "react";
import { ContainerList } from "./styles";
import Card from "../Card";
import { getProducts } from "./fetch";

const CardList = () => {
    const [products, setProducts] = useState([]);

    const productList = require('./[listar]get-products.json');

    // useEffect(() => {
    //     getProducts().then((data) => {
    //         console.log(data)
    //         setProducts(data);
    //     })
    // }, []);

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