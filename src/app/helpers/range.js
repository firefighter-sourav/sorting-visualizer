const range = (min, max, step = 1) => {
    let newArray = []
    for(let i=min; i<max; i += step) {
        newArray.push(i)
    }
    return newArray
}

export default range