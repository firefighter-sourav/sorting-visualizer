import { useDispatch, useSelector } from "react-redux"
import sleep from "../../helpers/sleep"
import swap from "../../helpers/swap"
import { updateActiveBars, updateBars, updateSorting } from "../../store/actions/barActions"
import finishSorting from "../../store/dispatchers/finishSorting"

const useMergeSort = () => {
    const dispatch = useDispatch()
    const bars = useSelector((state) => state.bar.bars)
    const arrayLength = useSelector((state) => state.toolbar.arrayLength)
    const speed = useSelector((state) => state.toolbar.speed)
    const merge = async (left, right) => {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
      
        // We will concatenate values into the resultArray in order
        while (leftIndex < left.length && rightIndex < right.length) {
            dispatch(updateActiveBars([leftIndex, rightIndex], true))
            await sleep(speed)
            if (left[leftIndex].value < right[rightIndex].value) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
            dispatch(updateActiveBars([leftIndex, rightIndex], false))
        }
      
        // We need to concat here because there will be one element remaining
        // from either left OR the right
        return resultArray
                .concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex));
    }
    const doSorting = async (unsortedArray=bars) => {
        // No need to sort the array if the array only has one element or empty
        if (unsortedArray.length <= 1) {
          return unsortedArray
        }
        // In order to divide the array in half, we need to figure out the middle
        const middle = Math.floor(unsortedArray.length / 2)
      
        // This is where we will be dividing the array into left and right
        const left = unsortedArray.slice(0, middle)
        const right = unsortedArray.slice(middle)
      
        // Using recursion to combine the left and right
        const mergedArray = await merge(await doSorting(left), await doSorting(right))
        return mergedArray
    }
    const mergeSort = async () => {
        dispatch(updateSorting(true))
        let newBars = await doSorting(bars);
        console.log(newBars);
        dispatch(updateBars(newBars))
        dispatch(updateSorting(false))
        dispatch(finishSorting(bars))
    }
    return { mergeSort }
}

export default useMergeSort