import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import ThunkMiddleware from "redux-thunk";
import groupsReducer from "./reducers/groupsReducer";
import registrationPageReducer from "./reducers/registrationPageReducer";
import loginPageReducer from "./reducers/loginPageReducer";
import userReducer from "./reducers/userReducer";
import profilePageReducer from "./reducers/profilePageReducer";
import coursesReducer from "./reducers/coursesReducer";

let reducers = combineReducers({
    groupsPage: groupsReducer,
    coursePage: coursesReducer,
    registrationPage: registrationPageReducer,
    loginPage: loginPageReducer,
    profilePage: profilePageReducer,
    user: userReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;