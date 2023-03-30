import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import ThunkMiddleware from "redux-thunk";
import courseModalReducer from "./reducers/modalReducers/courseModalReducer";
import courseStatusModalReducer from "./reducers/modalReducers/courseStatusReducer";
import noticeModalReducer from "./reducers/modalReducers/noticeModalReducer";
import teacherModalReducer from "./reducers/modalReducers/teacherModalReducer";
import markModalReducer from "./reducers/modalReducers/markModalReducer";
import groupsPageReducer from "./reducers/groupsPageReducer";
import registrationPageReducer from "./reducers/registrationPageReducer";
import loginPageReducer from "./reducers/loginPageReducer";
import userReducer from "./reducers/userReducer";

let reducers = combineReducers({
    groupsPage: groupsPageReducer,
    registrationPage: registrationPageReducer,
    loginPage: loginPageReducer,
    user: userReducer,
    courseModal: courseModalReducer,
    courseStatusModal: courseStatusModalReducer,
    noticeModal: noticeModalReducer,
    teacherModal: teacherModalReducer,
    markModal: markModalReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;