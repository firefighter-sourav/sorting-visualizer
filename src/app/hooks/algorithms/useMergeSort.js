import { useDispatch, useSelector } from "react-redux"
import { MAX_BAR_HEIGHT } from "../../constants/barOptions"
import sleep from "../../helpers/sleep"
import swap from "../../helpers/swap"
import { updateActiveBars, updateBars, updateSorting } from "../../store/actions/barActions"
import finishSorting from "../../store/dispatchers/finishSorting"

const useMergeSort = () => {
    const dispatch = useDispatch()
    const bars = useSelector((state) => state.bar.bars)
    const arrayLength = useSelector((state) => state.toolbar.arrayLength)
    const speed = useSelector((state) => state.toolbar.speed)
    const mergeSort = async () => {
        let current_size = 1
        let newBars = bars
        while (current_size < (newBars.length - 1)) {
            let left = 0
            while (left < newBars.length - 1) {
                let mid = Math.min((left + current_size - 1), (newBars.length-1))
                let right = (2 * current_size + left - 1 > newBars.length-1) ? newBars.length - 1 : 2 * current_size + left - 1
                let n1 = mid - left + 1
                let n2 = right - mid
                let L = []
                for(let x=0; x<n1; x++){
                    L.push(0)
                }
                let R = []
                for(let x=0; x<n1; x++){
                    R.push(0)
                }
                for (let x=0; x<n1; x++){
                    L[x] = newBars[left + x]
                }
                for (let x=0; x<n2; x++){
                    R[x] = newBars[mid + x + 1] 
                }
                let i = 0,
                    j = 0,
                    k = left
                while (i < n1 && j < n2) {
                    let indices = [k, newBars.indexOf(L[i]), newBars.indexOf(R[j])]
                    indices = [...new Set(indices)]
                    dispatch(updateActiveBars(indices, true))
                    await sleep(speed*5)
                    if (L[i].value > R[j].value){
                        newBars[k++] = R[j++]
                    } else {
                        newBars[k++] = L[i++]
                    }
                    dispatch(updateActiveBars(indices, false))
                    await sleep(speed*5)
                    dispatch(updateBars(newBars))
                }
                while (i < n1) {
                    newBars[k++] = L[i++]
                }
                while (j < n2) {
                    newBars[k++] = R[j++] 
                }
                left = left + current_size*2
            }
            current_size = 2 * current_size 
        }
        dispatch(updateBars(newBars))
        dispatch(updateSorting(false))
        dispatch(finishSorting(newBars))
    }
    return { mergeSort }
}

export default useMergeSort