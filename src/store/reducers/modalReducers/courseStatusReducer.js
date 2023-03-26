import {toast} from "react-toastify";

const
    OPEN_COURSE_STATUS_MODAL = "OPEN_COURSE_STATUS_MODAL",
    CLOSE_COURSE_STATUS_MODAL = "CLOSE_COURSE_STATUS_MODAL",
    EDIT_VALUE_COURSE_STATUS_MODAL = "EDIT_VALUE_COURSE_STATUS_MODAL"
;

let initialState = {
    isShow: false,
    value: ""
};

const courseStatusModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_COURSE_STATUS_MODAL:
            return {
                ...state,
                isShow: true
            };
        case CLOSE_COURSE_STATUS_MODAL:
            return {
                ...state,
                isShow: false
            };
        case EDIT_VALUE_COURSE_STATUS_MODAL:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

export const openCourseStatusModal = () => ({type: OPEN_COURSE_STATUS_MODAL});
export const closeCourseStatusModal = () => ({type: CLOSE_COURSE_STATUS_MODAL});
export const editValueCourseStatusModal = (value) => ({type: EDIT_VALUE_COURSE_STATUS_MODAL, value})


export default courseStatusModalReducer;