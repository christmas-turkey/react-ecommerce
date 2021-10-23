import {SET_PRODUCTS} from '../constants/products'

const setProducts = products => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
} 

export default setProducts