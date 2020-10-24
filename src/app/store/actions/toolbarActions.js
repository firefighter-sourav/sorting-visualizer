import * as toolbarActionTypes from "../actionTypes/toolbarActionTypes"

export const updateArrayLength = (arrayLength) => {
    return {
        type: toolbarActionTypes.UPDATE_ARRAY_LENGTH,
        payload: arrayLength,
    };
};

export const updateSortingAlgorithm = (sortingAlgorithm) => {
    return {
        type: toolbarActionTypes.UPDATE_SORTING_ALGORITHM,
        payload: sortingAlgorithm,
    };
};
  
export const updateSortingSpeed = (speed) => {
    return {
        type: toolbarActionTypes.UPDATE_SORTING_SPEED,
        payload: speed
    };
};
  