import api from "../../services/api";

export const addProduct = async (productBody) => {
  try {
    const { data } = await api.post(`/products`, productBody);
    return data;
  } catch (e) {
    return null;
  }
};

export const editProduct = async (productBody) => {
  try {
    const { data } = await api.put(`/products`, productBody);
    return data;
  } catch (e) {
    return null;
  }
};