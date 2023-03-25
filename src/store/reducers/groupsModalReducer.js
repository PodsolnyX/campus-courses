const
    OPEN_GROUPS_MODAL = "OPEN_GROUPS_MODAL",
    CLOSE_GROUPS_MODAL = "CLOSE_GROUPS_MODAL",
    EDIT_VALUE_GROUPS_MODAL = "EDIT_VALUE_GROUPS_MODAL"
;

let initialState = {
    isShow: false,
    isEdit: false,
    value: ""
};

const groupsModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_GROUPS_MODAL:
            return {
                ...state,
                isShow: true,
                isEdit: action.isEdit,
                value: action.value
            };
        case CLOSE_GROUPS_MODAL:
            return {
                ...state,
                isShow: false
            };
        case EDIT_VALUE_GROUPS_MODAL:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

export const openGroupsModal = (value, isEdit) => ({type: OPEN_GROUPS_MODAL, value, isEdit});
export const closeGroupsModal = () => ({type: CLOSE_GROUPS_MODAL});
export const editValueGroupsModal = (value) => ({type: EDIT_VALUE_GROUPS_MODAL, value})


export default groupsModalReducer;