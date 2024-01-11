import AddProductButton from "../../components/AddProductButton";
import CardList from "../../components/CardList";
import { AddProduct } from "./styles";

export default function Dashboard() {
    return (
        <>
            <AddProduct>
                <AddProductButton />
            </AddProduct>
            <CardList />
        </>
    );
}