import * as barTypes from "../constants/barTypes";

const getBarColor = (type) => {
    switch(type){
        case barTypes.ACTIVE:
            return "var(--active-bar-background)"
        case barTypes.SORTED:
            return "var(--sorted-bar-background)"
        case barTypes.UNSORTED:
            return "var(--unsorted-bar-background)"
        default:
            return "var(--unsorted-bar-background)"
    }
}

export default getBarColor