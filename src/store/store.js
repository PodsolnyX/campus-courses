import { legacy_createStore as createStore, combineReducers} from 'redux'
import deletePopupReducer from "./reducers/modalReducers/deletePopupReducer";
import groupsModalReducer from "./reducers/modalReducers/groupsModalReducer";
import courseModalReducer from "./reducers/modalReducers/courseModalReducer";
import courseStatusModalReducer from "./reducers/modalReducers/courseStatusReducer";
import noticeModalReducer from "./reducers/modalReducers/noticeModalReducer";
import teacherModalReducer from "./reducers/modalReducers/teacherModalReducer";
import markModalReducer from "./reducers/modalReducers/markModalReducer";

let reducers = combineReducers({
    deletePopup: deletePopupReducer,
    groupsModal: groupsModalReducer,
    courseModal: courseModalReducer,
    courseStatusModal: courseStatusModalReducer,
    noticeModal: noticeModalReducer,
    teacherModal: teacherModalReducer,
    markModal: markModalReducer
});

let store = createStore(reducers);

export default store;