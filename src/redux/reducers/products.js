import {SET_PRODUCTS} from '../constants/products'

const products = (state=null, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}

export default products