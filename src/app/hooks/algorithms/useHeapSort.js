import { useDispatch, useSelector } from "react-redux"
import sleep from "../../helpers/sleep"
import swap from "../../helpers/swap"
import { updateActiveBars, updateBars, updateSorting } from "../../store/actions/barActions"
import finishSorting from "../../store/dispatchers/finishSorting"

const useHeapSort = () => {
    const dispatch = useDispatch()
    let bars = useSelector((state) => state.bar.bars)
    var arrayLength = bars.length
    const speed = useSelector((state) => state.toolbar.speed)
    const heapSort = async () => {
        let n = arrayLength
        for (let i = 1; i < n; i++)  
        { 
            // if child is bigger than parent
            let parentHalf = parseInt((i - 1) / 2)
            if (bars[i].value > bars[parentHalf].value) { 
                let j = i
                // swap child and parent until
                // parent is smaller
                while (bars[j].value > bars[parseInt((j - 1)/2)].value) { 
                    swap(bars, j, parseInt((j - 1)/2))
                    j = parseInt((j - 1)/2)
                }
            }
        }
        for (let i = n - 1; i > 0; i--) 
        { 
            // swap value of first indexed  
            // with last indexed
            swap(bars, 0, i)
            // maintaining heap property 
            // after each swapping 
            let j = 0, index
            do { 
                index = (2 * j + 1)
                // if left child is smaller than  
                // right child point index variable  
                // to right child
                if(index < i){
                    dispatch(updateActiveBars([index, index + 1], true))
                    await sleep(speed)
                }
                if (index < (i - 1) && bars[index].value < bars[index + 1].value) {
                    index++
                    dispatch(updateActiveBars([index], false))
                    await sleep(speed)
                }
                // if parent is smaller than child  
                // then swapping parent with child  
                // having higher value
                if(index < i){
                    dispatch(updateActiveBars([j, index], true))
                    await sleep(speed)
                }
                if (index < i && bars[j].value < bars[index].value) {
                    swap(bars, j, index)
                    dispatch(updateActiveBars([j, index], false))
                    await sleep(speed)
                }
                j = index
            } while (index < i)
            dispatch(updateBars(bars))
            await sleep(speed)
        }
        dispatch(updateBars(bars))
        dispatch(updateSorting(false))
        dispatch(finishSorting(bars))
    } 
    return { heapSort }
}

export default useHeapSort