import * as ActionTypes from '../action-types'

var initialState = [
  
];

const checkout = (state = initialState, action) => {
    var { products, quantity } = action;
    var index = -1;
    switch (action.type) {
        case ActionTypes.CHECKOUT_PRODUCT:
            index = findProductInCart(state, products)
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    products,
                    quantity
                })
            }
            return [...state];
            case ActionTypes.DELETE_PRODUCT:
            index = findProductInCart(state,products);
            if(index != -1){
                state.splice(index,1);
            }
            return [...state];
        default: return [...state];
    }
};

var findProductInCart = (cart, products) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].products._id === products._id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default checkout;