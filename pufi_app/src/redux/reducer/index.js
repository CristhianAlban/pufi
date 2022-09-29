import{OPEN_MODAL, CLOSE_MODAL}from "../constants";

const initialState = {
    data:{
        product:""
    },
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
        default:
            return state;    
    }
}
export default rootReducer;