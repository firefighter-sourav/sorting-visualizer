import { useSelector } from "react-redux"
import { BUBBLE_SORT, MERGE_SORT } from "../../constants/algoTypes"
import useBubbleSort from "./useBubbleSort"
import useMergeSort from "./useMergeSort"

const useSort = () => {
    const { bubbleSort } = useBubbleSort()
    const { mergeSort } = useMergeSort()
    const sortingAlgo = useSelector((state) => state.toolbar.sortingAlgo)
    const sort = () => {
        switch(sortingAlgo) {
            case BUBBLE_SORT:
                bubbleSort()
                break
            case MERGE_SORT:
                mergeSort()
                break
            default:
                return
        }
    }
    return { sort }
}

export default useSort