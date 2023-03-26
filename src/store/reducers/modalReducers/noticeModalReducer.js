const
    OPEN_NOTICE_MODAL = "OPEN_NOTICE_MODAL",
    CLOSE_NOTICE_MODAL = "CLOSE_NOTICE_MODAL",
    EDIT_VALUE_NOTICE_MODAL = "EDIT_VALUE_NOTICE_MODAL"
;

let initialState = {
    isShow: false,
    value: ""
};

const noticeModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_NOTICE_MODAL:
            return {
                ...state,
                isShow: true
            };
        case CLOSE_NOTICE_MODAL:
            return {
                ...state,
                isShow: false
            };
        case EDIT_VALUE_NOTICE_MODAL:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

export const openNoticeModal = () => ({type: OPEN_NOTICE_MODAL});
export const closeNoticeModal = () => ({type: CLOSE_NOTICE_MODAL});
export const editValueNoticeModal = (value) => ({type: EDIT_VALUE_NOTICE_MODAL, value})


export default noticeModalReducer;