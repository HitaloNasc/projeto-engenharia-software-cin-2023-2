import api from "../../services/api";

export const getProducts = async () => {
  try {
    const { data } = await api.get(`/products`);
    return data;
  } catch (e) {
    return null;
  }
};