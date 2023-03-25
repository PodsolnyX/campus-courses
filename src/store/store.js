import { legacy_createStore as createStore, combineReducers} from 'redux'
import deletePopupReducer from "./reducers/deletePopupReducer";
import groupsModalReducer from "./reducers/groupsModalReducer";
import courseModalReducer from "./reducers/courseModalReducer";

let reducers = combineReducers({
    deletePopup: deletePopupReducer,
    groupsModal: groupsModalReducer,
    courseModal: courseModalReducer
});

let store = createStore(reducers);

export default store;