const
    OPEN_GROUPS_MODAL = "OPEN_GROUPS_MODAL",
    CLOSE_GROUPS_MODAL = "CLOSE_GROUPS_MODAL",
    EDIT_VALUE_GROUPS_MODAL = "EDIT_VALUE_GROUPS_MODAL",
    OPEN_DELETE_POPUP = "OPEN_DELETE_POPUP",
    CLOSE_DELETE_POPUP = "CLOSE_DELETE_POPUP"
;

let initialState = {
    isShowModal: false,
    isShowPopup: false,
    isEdit: false,
    value: ""
};

const groupsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_GROUPS_MODAL:
            return {
                ...state,
                isShowModal: true,
                isEdit: action.isEdit,
                value: action.value
            };
        case CLOSE_GROUPS_MODAL:
            return {
                ...state,
                isShowModal: false
            };
        case EDIT_VALUE_GROUPS_MODAL:
            return {
                ...state,
                value: action.value
            };
        case OPEN_DELETE_POPUP:
            return {
                ...state,
                isShowPopup: true
            };
        case CLOSE_DELETE_POPUP:
            return {
                ...state,
                isShowPopup: false
            };
        default:
            return state;
    }
}

export const openGroupsModal = (value, isEdit) => ({type: OPEN_GROUPS_MODAL, value, isEdit});
export const closeGroupsModal = () => ({type: CLOSE_GROUPS_MODAL});
export const editValueGroupsModal = (value) => ({type: EDIT_VALUE_GROUPS_MODAL, value})

export const openDeletePopup = () => ({type: OPEN_DELETE_POPUP});
export const closeDeletePopup = () => ({type: CLOSE_DELETE_POPUP});

export default groupsPageReducer;