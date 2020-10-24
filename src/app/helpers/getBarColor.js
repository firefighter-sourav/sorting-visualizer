import * as barTypes from "../constants/barTypes";

export default (type) => {
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