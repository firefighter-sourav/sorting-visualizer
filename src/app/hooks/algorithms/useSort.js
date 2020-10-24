import { useSelector } from "react-redux"
import { BUBBLE_SORT } from "../../constants/algoTypes"
import useBubbleSort from "./useBubbleSort"

const useSort = () => {
    const { bubbleSort } = useBubbleSort()
    const sortingAlgo = useSelector((state) => state.toolbar.sortingAlgo)
    const sort = () => {
        switch(sortingAlgo) {
            case BUBBLE_SORT:
                bubbleSort()
            default:
                return
        }
    }
    return { sort }
}

export default useSort