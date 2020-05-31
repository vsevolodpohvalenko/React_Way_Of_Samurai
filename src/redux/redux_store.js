import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ProfileReducer from './profile_reducer'
import DialogsReducer from './dialogs_reducer'
import SideReducer from "./sideBar_reducer";
import {ToDoReducer} from "./ToDo_reducer"
import UsersReducer from "./Users_reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import AppReducer from "../AppReducer";
let reducers = combineReducers({
            dialogs: DialogsReducer,
            ProfilePage: ProfileReducer,
            sideBar: SideReducer,
            usersPage: UsersReducer,
            auth: AuthReducer,
            Todo: ToDoReducer,
            App: AppReducer,
            form: formReducer
    }
);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)
  ));


window.__store__ = store;
export default store