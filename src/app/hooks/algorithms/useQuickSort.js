import { useDispatch, useSelector } from "react-redux"
import sleep from "../../helpers/sleep"
import swap from "../../helpers/swap"
import { updateActiveBars, updateBars, updateSorting } from "../../store/actions/barActions"
import finishSorting from "../../store/dispatchers/finishSorting"

const useQuickSort = () => {
    const dispatch = useDispatch()
    const bars = useSelector((state) => state.bar.bars)
    const arrayLength = useSelector((state) => state.toolbar.arrayLength)
    const speed = useSelector((state) => state.toolbar.speed)
    const quickSort = async () => {
        let swapped;
        dispatch(updateSorting(true))
        for(let i=0; i<arrayLength; i++){
            swapped = false
            for(let j=0; j<arrayLength-i-1; j++){
                dispatch(updateActiveBars([j, j+1], true))
                await sleep(speed)
                if (bars[j].value > bars[j+1].value){
                    swap(bars, j, j+1)
                    swapped = true
                }
                dispatch(updateBars(bars))
                dispatch(updateActiveBars([j, j+1], false))
                await sleep(speed)
            }
            if (!swapped) {
                break
            }
        }
        dispatch(updateSorting(false))
        dispatch(finishSorting(bars))
    }
    return { quickSort }
}

export default useQuickSort