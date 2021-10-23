import {ADD_CART_ITEM, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from '../constants/cart'

const initialState = {
    totalQuantity: 0,
    totalPrice: 0,
    products: {}
}

const _removeCartItem = (id, items) => {
    let newItems = {}

    Object.values(items).forEach(obj => {
        if (obj.id !== id) {
            newItems[obj.id] = obj
        }
    })

    return newItems
}

const _getTotalPrice = items => {
    return (
        Object.values(items)
          .reduce((total, obj) => total + obj.price * obj.quantity, 0)
          .toFixed(2)
        )
}

const _getTotalQuantity = items => {
    return (
        Object.values(items)
          .reduce((total, obj) => total + obj.quantity, 0)
    )
}

const cart = (state=initialState, action) => {

    switch (action.type) {
        case ADD_CART_ITEM: {
            const updatedItems = {
                ...state.products,
                [action.payload.id]: {
                    ...action.payload,
                    quantity: state.products[action.payload.id]
                              ? ++state.products[action.payload.id].quantity
                              : action.payload.quantity
                }
            }

            return {
                ...state, 
                products: updatedItems,
                totalPrice: _getTotalPrice(updatedItems),
                totalQuantity: _getTotalQuantity(updatedItems)
            }
        }
        case PLUS_CART_ITEM: {
            const updatedItems = {
                ...state.products,
                [action.payload]: {
                    ...state.products[action.payload],
                    quantity: ++state.products[action.payload].quantity
                }
            }

            return {
                ...state, 
                products: updatedItems,
                totalPrice: _getTotalPrice(updatedItems),
                totalQuantity: _getTotalQuantity(updatedItems)
            }
        }
        case MINUS_CART_ITEM: {
            const updatedItems = state.products[action.payload].quantity > 1
             ? {
                ...state.products,
                [action.payload]: {
                    ...state.products[action.payload],
                    quantity: --state.products[action.payload].quantity
                }
            }
             : _removeCartItem(action.payload, state.products)

            return {
                ...state, 
                products: updatedItems,
                totalPrice: _getTotalPrice(updatedItems),
                totalQuantity: _getTotalQuantity(updatedItems)
            }

        }
        case REMOVE_CART_ITEM: {
            const updatedItems = _removeCartItem(action.payload, state.products)

            return {
                ...state, 
                products: updatedItems,
                totalPrice: _getTotalPrice(updatedItems),
                totalQuantity: _getTotalQuantity(updatedItems)
            }
        }
        default: {
            return state
        }
    }
}

export default cart