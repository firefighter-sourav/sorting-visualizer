const { default: sleep } = require("../../helpers/sleep")
const { updateActiveBars, updateSorted } = require("../actions/barActions")

const finishSorting = (bars) => async (dispatch) => {
    let indices = []
    for(let i=0; i<bars.length; i++){
        indices.push(i)
        dispatch(updateActiveBars(indices,false))
        await sleep(50)
    }
    dispatch(updateSorted(true))
}

export default finishSorting