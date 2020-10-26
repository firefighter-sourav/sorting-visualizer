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
        dispatch(updateSorting(true))
        let l = 0
        let h = arrayLength - 1
        // Create an auxiliary temp 
        let temp = new Array(h - l + 1); 
    
        // initialize head of temp 
        let head = -1; 
    
        // push initial values of l and h to temp 
        temp[++head] = l; 
        temp[++head] = h; 
    
        // Keep popping from temp while is not empty 
        while (head >= 0) {
            // Pop h and l 
            h = temp[head--]; 
            l = temp[head--];
    
            // Set pivot element at its correct position 
            // in sorted array
            let x = bars[h].value; 
            let i = (l - 1);
            
            for (let j = l; j <= h - 1; j++) {
                dispatch(updateActiveBars([i, j], true))
                await sleep(speed)
                if (bars[j].value <= x) { 
                    i++;
                    dispatch(updateActiveBars([i, j], true))
                    await sleep(speed)
                    swap(bars, i, j)
                    dispatch(updateBars(bars))
                    dispatch(updateActiveBars([i, j], false))
                    await sleep(speed)
                }
            } 
            swap(bars, i + 1, h)
            let p = i+1
    
            // If there are elements on left side of pivot, 
            // then push left side to temp 
            if (p - 1 > l) { 
                temp[++head] = l; 
                temp[++head] = p - 1; 
            } 
    
            // If there are elements on right side of pivot, 
            // then push right side to temp 
            if (p + 1 < h) { 
                temp[++head] = p + 1; 
                temp[++head] = h; 
            } 
        }

        dispatch(updateBars(bars))
        dispatch(updateSorting(false))
        dispatch(finishSorting(bars))
    }

    return { quickSort }
}

export default useQuickSort