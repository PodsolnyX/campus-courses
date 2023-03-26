const
    OPEN_DELETE_POPUP = "OPEN_DELETE_POPUP",
    CLOSE_DELETE_POPUP = "CLOSE_DELETE_POPUP"
;

let initialState = {
    isShow: false
};

const deletePopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DELETE_POPUP:
            return {
                ...state,
                isShow: true
            };
        case CLOSE_DELETE_POPUP:
            return {
                ...state,
                isShow: false
            };
        default:
            return state;
    }
}

export const openDeletePopup = () => ({type: OPEN_DELETE_POPUP});
export const closeDeletePopup = () => ({type: CLOSE_DELETE_POPUP});


export default deletePopupReducer;