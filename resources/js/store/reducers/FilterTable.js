import * as ActionTypes from '../action-types'

const initialState = 'MOV004';

const filterTable = (state = initialState , action) => {

    switch(action.ActionTypes){
        case ActionTypes.FILTER_TABLE:
            state= action.filter
            return state
        default: return state;
    }
}

export default filterTable;