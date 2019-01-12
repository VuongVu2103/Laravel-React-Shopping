import * as ActionTypes from '../action-types'

   var initialState = [];

   const products = (state = initialState, action) => {
       switch (action.type) {
           case ActionTypes.FETCH_PRODUCTS:
           state = action.products;
               return [...state];
           default: return [...state];
       }
   };

export default products;