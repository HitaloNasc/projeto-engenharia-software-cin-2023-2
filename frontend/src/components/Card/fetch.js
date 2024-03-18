import api from "../../services/api";

export const deleteProduct = async (productID) => {
    try {
        const { data } = await api.delete(`/products/${productID}`);
        return data;
    } catch (e) {
        return null;
    }
};