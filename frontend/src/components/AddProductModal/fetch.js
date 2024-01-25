import api from "../../services/api";

export const addProduct = async (productBody) => {
  try {
    const { data } = await api.post(`/products`, productBody);
    return data;
  } catch (e) {
    return null;
  }
};

export const editProduct = async (productID, productBody) => {
  try {
    const { data } = await api.put(`/products/${productID}`, productBody);
    return data;
  } catch (e) {
    return null;
  }
};

export const deleteProduct = async (productID) => {
  try {
    const { data } = await api.put(`/products/${productID}`);
    return data;
  } catch (e) {
    return null;
  }
};