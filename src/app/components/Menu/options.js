import * as algoTypes from "../../constants/algoTypes"

export const lengthOptions = [
    {
        value: "10",
        label: "10 - Elements"
    },
    {
        value: "20",
        label: "20 - Elements"
    },
    {
        value: "50",
        label: "50 - Elements"
    },
    {
        value: "75",
        label: "75 - Elements"
    },
    {
        value: "100",
        label: "100 - Elements"
    },
    {
        value: "150",
        label: "MAX - Elements"
    }
]
/**
 * value denotes the sleep time
 * hence the lesser the value the faster the actions
 */
export const speedOptions = [
    {
        value: 200,
        label: "Slow"
    },
    {
        value: 100,
        label: "Medium"
    },
    {
        value: 50,
        label: "Fast"
    },
    {
        value: 1,
        label: "Super Fast"
    },
]

export const sortingOptions = [
    {
        value: algoTypes.BUBBLE_SORT,
        label: "Bubble Sort"
    },
    {
        value: algoTypes.MERGE_SORT,
        label: "Merge Sort"
    },
    {
        value: algoTypes.SELECTION_SORT,
        label: "Selection Sort"
    },
    {
        value: algoTypes.HEAP_SORT,
        label: "Heap Sort"
    },
    {
        value: algoTypes.QUICK_SORT,
        label: "Quick Sort"
    }
]