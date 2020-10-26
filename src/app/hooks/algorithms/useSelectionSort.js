import { useDispatch, useSelector } from "react-redux"
import range from "../../helpers/range"
import sleep from "../../helpers/sleep"
import swap from "../../helpers/swap"
import { updateActiveBars, updateBars, updateSorting } from "../../store/actions/barActions"
import finishSorting from "../../store/dispatchers/finishSorting"
const BASE_SPEED = 5
const useSelectionSort = () => {
    const dispatch = useDispatch()
    let bars = useSelector((state) => state.bar.bars)
    const arrayLength = bars.length
    const speed = useSelector((state) => state.toolbar.speed)
    const selectionSort = async () => {
        dispatch(updateSorting(true))
        for(let i=0; i<arrayLength; i++){
            let j,
                min = i
            for(j = i; j < arrayLength; j++){
                dispatch(updateActiveBars([i], false))
                dispatch(updateActiveBars(range(i+1, j), true))
                await sleep(speed/BASE_SPEED)
                if(bars[j].value < bars[min].value) {
                    min=j;
                }
            }
            dispatch(updateActiveBars(range(i+1, j), false))
            await sleep(speed/BASE_SPEED)
            if (min != i) {
                // Swapping the elements
                swap(bars, min, i)
            }
            dispatch(updateBars(bars))
        }
        dispatch(updateSorting(false))
        dispatch(finishSorting(bars))
    }
    return { selectionSort }
}

export default useSelectionSort