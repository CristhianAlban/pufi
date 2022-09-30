import{OPEN_MODAL, CLOSE_MODAL, GET_PRODUC}from "../constants";

export  function openModal(data) {
    return {type: OPEN_MODAL, payload: data }
};

export function closeModal (){
    return {type: CLOSE_MODAL, payload:{product:""}}
}
export function getProduct (data){
    return {type: GET_PRODUC, payload:data}
}
