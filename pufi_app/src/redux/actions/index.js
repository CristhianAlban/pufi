import{OPEN_MODAL, CLOSE_MODAL}from "../constants";

export  function openModal(data) {
    return {type: OPEN_MODAL, payload: data }
};

export function closeModal (){
    return {type: CLOSE_MODAL, payload:{product:""}}
}
