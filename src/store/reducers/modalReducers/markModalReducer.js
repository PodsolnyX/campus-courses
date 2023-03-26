const
    OPEN_MARK_MODAL = "OPEN_MARK_MODAL",
    CLOSE_MARK_MODAL = "CLOSE_MARK_MODAL",
    EDIT_VALUE_MARK_MODAL = "EDIT_VALUE_MARK_MODAL"
;

let initialState = {
    isShow: false,
    value: ""
};

const markModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MARK_MODAL:
            return {
                ...state,
                isShow: true
            };
        case CLOSE_MARK_MODAL:
            return {
                ...state,
                isShow: false
            };
        case EDIT_VALUE_MARK_MODAL:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

export const openMarkModal = () => ({type: OPEN_MARK_MODAL});
export const closeMarkModal = () => ({type: CLOSE_MARK_MODAL});
export const editValueMarkModal = (value) => ({type: EDIT_VALUE_MARK_MODAL, value})


export default markModalReducer;