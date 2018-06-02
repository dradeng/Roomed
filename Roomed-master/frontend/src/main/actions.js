import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../constants/actionTypes';


export function showModal() {
    console.log("SHOWED modal");
    return {
        type: SHOW_MODAL,
    }
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    }
}
