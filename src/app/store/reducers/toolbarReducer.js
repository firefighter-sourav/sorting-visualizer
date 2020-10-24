import * as toolbarActionTypes from "../actionTypes/toolbarActionTypes";

const initialState = {
    arrayLength: 0,
    sortingAlgo: null,
    speed: 0
}

const toolbarReducer = (state = initialState, action) => {
    switch(action.type){
        case toolbarActionTypes.UPDATE_ARRAY_LENGTH:
            return {
                ...state,
                arrayLength: action.payload
            }
        case toolbarActionTypes.UPDATE_SORTING_ALGORITHM:
            return {
                ...state,
                sortingAlgo: action.payload
            }
        case toolbarActionTypes.UPDATE_SORTING_SPEED:
            return {
                ...state,
                speed: action.payload
            }
        default:
            return state
    }
}

export default toolbarReducer;