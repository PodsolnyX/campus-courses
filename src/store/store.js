import { legacy_createStore as createStore, combineReducers} from 'redux'
import courseModalReducer from "./reducers/modalReducers/courseModalReducer";
import courseStatusModalReducer from "./reducers/modalReducers/courseStatusReducer";
import noticeModalReducer from "./reducers/modalReducers/noticeModalReducer";
import teacherModalReducer from "./reducers/modalReducers/teacherModalReducer";
import markModalReducer from "./reducers/modalReducers/markModalReducer";
import groupsPageReducer from "./reducers/groupsPageReducer";
import registrationPageReducer from "./reducers/registrationPageReducer";
import loginPageReducer from "./reducers/loginPageReducer";

let reducers = combineReducers({
    groupsPage: groupsPageReducer,
    registrationPage: registrationPageReducer,
    loginPage: loginPageReducer,
    courseModal: courseModalReducer,
    courseStatusModal: courseStatusModalReducer,
    noticeModal: noticeModalReducer,
    teacherModal: teacherModalReducer,
    markModal: markModalReducer
});

let store = createStore(reducers);

export default store;