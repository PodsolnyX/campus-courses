import { legacy_createStore as createStore, combineReducers} from 'redux'
import deletePopupReducer from "./reducers/modalReducers/deletePopupReducer";
import groupsModalReducer from "./reducers/modalReducers/groupsModalReducer";
import courseModalReducer from "./reducers/modalReducers/courseModalReducer";
import courseStatusModalReducer from "./reducers/modalReducers/courseStatusReducer";

let reducers = combineReducers({
    deletePopup: deletePopupReducer,
    groupsModal: groupsModalReducer,
    courseModal: courseModalReducer,
    courseStatusModal: courseStatusModalReducer
});

let store = createStore(reducers);

export default store;