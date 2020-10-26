import { useSelector } from "react-redux"
import * as algoTypes from "../../constants/algoTypes"
import useBubbleSort from "./useBubbleSort"
import useHeapSort from "./useHeapSort"
import useMergeSort from "./useMergeSort"
import useQuickSort from "./useQuickSort"
import useSelectionSort from "./useSelectionSort"

const useSort = () => {
    const { bubbleSort } = useBubbleSort()
    const { mergeSort } = useMergeSort()
    const { quickSort } = useQuickSort()
    const { selectionSort } = useSelectionSort()
    const { heapSort } = useHeapSort()
    const sortingAlgo = useSelector((state) => state.toolbar.sortingAlgo)
    const sort = () => {
        switch(sortingAlgo) {
            case algoTypes.BUBBLE_SORT:
                bubbleSort()
                break
            case algoTypes.MERGE_SORT:
                mergeSort()
                break
            case algoTypes.SELECTION_SORT:
                selectionSort()
                break
            case algoTypes.HEAP_SORT:
                heapSort()
                break
            case algoTypes.QUICK_SORT:
                quickSort()
                break
            default:
                return
        }
    }
    return { sort }
}

export default useSort