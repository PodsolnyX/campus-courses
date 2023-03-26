const
    OPEN_TEACHER_MODAL = "OPEN_TEACHER_MODAL",
    CLOSE_TEACHER_MODAL = "CLOSE_TEACHER_MODAL",
    EDIT_VALUE_TEACHER_MODAL = "EDIT_VALUE_TEACHER_MODAL"
;

let initialState = {
    isShow: false,
    value: ""
};

const teacherModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_TEACHER_MODAL:
            return {
                ...state,
                isShow: true
            };
        case CLOSE_TEACHER_MODAL:
            return {
                ...state,
                isShow: false
            };
        case EDIT_VALUE_TEACHER_MODAL:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

export const openTeacherModal = () => ({type: OPEN_TEACHER_MODAL});
export const closeTeacherModal = () => ({type: CLOSE_TEACHER_MODAL});
export const editValueTeacherModal = (value) => ({type: EDIT_VALUE_TEACHER_MODAL, value})


export default teacherModalReducer;