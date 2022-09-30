import{OPEN_MODAL, CLOSE_MODAL, GET_PRODUC}from "../constants";

const initialState = {
    data:{
        product:""
    },
    name:"",
    isOpen:false
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return{
                ...state,
                data:action.payload,
                isOpen: true
            };
        case CLOSE_MODAL:
            return{
                ...state,
                data:action.payload,
                isOpen: false
            };
        case GET_PRODUC:
            return{
                ...state,
                name:action.payload
            }
        default:
            return state;    
    }
}
export default rootReducer;