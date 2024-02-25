import React, { useState } from "react";
import { ContainerList } from "./styles";
import Card from "../Card";
import { getProducts } from "./fetch";
import { BiSearch } from 'react-icons/bi';

const CardList = () => {
    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const productList = require('./[listar]get-products.json');

    const filteredProducts = productList.filter(product =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    // useEffect(() => {
    //     getProducts().then((data) => {
    //         console.log(data)
    //         setProducts(data);
    //     })
    // }, []);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <ContainerList>
            <div className="search">
                <input
                    type="text"
                    placeholder="Buscar produto..."
                    value={searchInput}
                    onChange={handleSearchInput}
                />
                <button>
                    <BiSearch />
                </button>
            </div>
            <div className="cards">
                {filteredProducts.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </ContainerList>
    );
}

export default CardList;