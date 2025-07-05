import axios  from "axios";
import {ApiConfiguration} from "./ApiConfiguration";


export const ProductService = {
    getProducts: async () => {return await axios.get(`${ApiConfiguration.Url}/Product/getAllProducts`)},
    getProductDetails: async (productId) => {return await axios.get(`${ApiConfiguration.Url}/Product/getProductDetails/${productId}`)},
}