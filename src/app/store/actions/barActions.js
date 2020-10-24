import * as barActionTypes from "../actionTypes/barActionTypes";

export const updateBars = (bars) => {
    return {
        type: barActionTypes.UPDATE_BARS,
        payload: bars
    }
}

export const updateActiveBars = (indices, active) => {
    return {
        type: barActionTypes.UPDATE_ACTIVE_BARS,
        payload: {
            indices,
            active
        }
    }
}

export const updateSorting = (sorting) => {
    return {
        type: barActionTypes.UPDATE_SORTING,
        payload: sorting
    }
}

export const updateSorted = (sorted) => {
    return {
        type: barActionTypes.UPDATE_SORTED,
        payload: sorted
    }
}
