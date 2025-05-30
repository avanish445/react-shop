import axios from "axios"

export const getProducts = async () => {
    console.log('Fetching products from API');
    const url = 'https://dummyjson.com/products'
    const response = await axios.get(url);
    return response.data;
}
export const getProduct = async (id) => {
    // console.log('Fetching products from API');
    const url = `https://dummyjson.com/products/${id}`
    const response = await axios.get(url);
    return response.data;
}