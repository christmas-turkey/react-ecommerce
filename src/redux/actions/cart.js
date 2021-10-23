import {ADD_CART_ITEM, MINUS_CART_ITEM, REMOVE_CART_ITEM, PLUS_CART_ITEM} from '../constants/cart'

export const addCartItem = productObject => {
    return {
        type: ADD_CART_ITEM,
        payload: productObject
    }
}

export const minusCartItem = id => {
    return {
        type: MINUS_CART_ITEM,
        payload: id
    }
}

export const plusCartItem = id => {
    return {
        type: PLUS_CART_ITEM,
        payload: id
    }
}

export const removeCartItem = id => {
    return {
        type: REMOVE_CART_ITEM,
        payload: id
    }
}