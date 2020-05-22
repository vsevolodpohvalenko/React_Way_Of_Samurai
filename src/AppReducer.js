import {getAuthUserData} from "./redux/auth-reducer";

const INITIALISED_SUCCESSED = "INITIALISED-SUCCESSED"
let initialState = {
    initialised: false,
}
const AppReducer = (state = initialState, action) =>{

    switch(action.type) {

        case INITIALISED_SUCCESSED:
            return{...state, initialised: true}
        default:
            return state}
}

export const initialisedSuccess = () => ({type: INITIALISED_SUCCESSED})
export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initialisedSuccess())})
}


export  default AppReducer;
