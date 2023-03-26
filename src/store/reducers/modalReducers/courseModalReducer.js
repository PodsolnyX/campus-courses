const
    OPEN_COURSE_MODAL = "OPEN_COURSE_MODAL",
    CLOSE_COURSE_MODAL = "CLOSE_COURSE_MODAL"
;

let initialState = {
    isShow: false,
    isEdit: false
};

const courseModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_COURSE_MODAL:
            return {
                ...state,
                isShow: true,
                isEdit: action.isEdit
            };
        case CLOSE_COURSE_MODAL:
            return {
                ...state,
                isShow: false
            };
        default:
            return state;
    }
}

export const openCourseModal = (isEdit) => ({type: OPEN_COURSE_MODAL, isEdit});
export const closeCourseModal = () => ({type: CLOSE_COURSE_MODAL});

export default courseModalReducer;