import { RECEIVE_CART_ITEM } from '../actions/cart_actions';
import { COMPLETE_DONATION } from '../actions/donation_actions';


const _nullCart = Object.freeze({
    projectId: null,
    amount: 0.00
});

const cartReducer = (oldState = _nullCart, action) => {
    Object.freeze(oldState)

    switch(action.type) {
        case RECEIVE_CART_ITEM:
            return action.cartItem
        case COMPLETE_DONATION:
            return _nullCart
        default:
            return oldState;
    }
};

export default cartReducer;

