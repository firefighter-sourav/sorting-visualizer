const swap = (array, firstIndex, secondIndex) => {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

export default swap