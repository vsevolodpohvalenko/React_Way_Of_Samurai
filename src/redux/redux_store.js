import { createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from './profile_reducer'
import DialogsReducer from './dialogs_reducer'
import SideReducer from "./sideBar_reducer";
import UsersReducer from "./Users_reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "../AppReducer";
let reducers = combineReducers({
        dialogs: DialogsReducer,
        ProfilePage: ProfileReducer,
        sideBar: SideReducer,
        usersPage: UsersReducer,
        auth: AuthReducer,
        App: appReducer,
        form: formReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store