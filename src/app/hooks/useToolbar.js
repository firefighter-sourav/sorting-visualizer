import { useDispatch, useSelector } from "react-redux"
import { MIN_BAR_HEIGHT, MAX_BAR_HEIGHT } from "../constants/barOptions";
import * as barTypes from "../constants/barTypes"
import getRandomInteger from "../helpers/getRandomInteger";
import { updateBars } from "../store/actions/barActions";
import { updateArrayLength, updateSortingAlgorithm, updateSortingSpeed } from "../store/actions/toolbarActions";

const useToolbar = () => {
    const dispatch = useDispatch();
    const currentArrayLength = useSelector((state) => state.toolbar.arrayLength)
    const generateNewArray = (arrayLength=null) => {
        const newArrayLength = arrayLength || currentArrayLength
        let newBars = []
        for(let i=0; i<newArrayLength; i++){
            newBars.push({
                type: barTypes.UNSORTED,
                value: getRandomInteger(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT)
            })
        }
        dispatch(updateBars(newBars))
    }
    const onChangeArrayLength = (e) => {
        const newArrayLength = parseInt(e.target.value);
        dispatch(updateArrayLength(newArrayLength))
        generateNewArray(newArrayLength)
    }
    const onChangeAlgorithm = (e) => {
        const algorithm = e.target.value
        dispatch(updateSortingAlgorithm(algorithm))
    }
    const onChangeSpeed = (e) => {
        const speed = e.target.value
        dispatch(updateSortingSpeed(speed))
    }
    return {
        onChangeArrayLength,
        onChangeAlgorithm,
        generateNewArray,
        onChangeSpeed
    }
}
export default useToolbar;