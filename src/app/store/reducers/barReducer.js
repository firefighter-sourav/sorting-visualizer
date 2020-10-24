import * as barTypes from "../../constants/barTypes";
import * as barActionTypes from "../actionTypes/barActionTypes";
const initialState = {
    bars: [],
    sorting: false,
    sorted: false
}

const barReducer = (state = initialState, action) => {
    switch(action.type){
        case barActionTypes.UPDATE_BARS:
            return {
                ...state,
                bars: action.payload
            }
        case barActionTypes.UPDATE_ACTIVE_BARS:
            return {
                ...state,
                bars: state.bars.map((bar,index)=>{
                    if(action.payload.indices.includes(index)){
                        return {
                            ...bar,
                            type: action.payload.active ? barTypes.ACTIVE : barTypes.SORTED
                        }
                    } else {
                        return {
                            ...bar,
                            type: barTypes.UNSORTED
                        }
                    }
                })
            }
        case barActionTypes.UPDATE_SORTING:
            return {
                ...state,
                sorting: action.payload
            }
        case barActionTypes.UPDATE_SORTED:
            return {
                ...state,
                sorted: action.payload
            }
        default:
            return state
    }
}

export default barReducer;