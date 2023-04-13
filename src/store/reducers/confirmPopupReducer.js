const
    OPEN_CONFIRM_POPUP = "OPEN_CONFIRM_POPUP",
    CLOSE_CONFIRM_POPUP = "CLOSE_CONFIRM_POPUP"
;

let initialState = {
    isShow: false,
};

let confirmCallback = () => {};

const confirmPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CONFIRM_POPUP:
            subscribe(action.callback)
            return {
                ...state,
                isShow: true
            };
        case CLOSE_CONFIRM_POPUP:
            return {
                ...state,
                isShow: false
            };
        default:
            return state;
    }
}

const subscribe = (observer) => {
    confirmCallback = observer;
}

export const openConfirmPopup = (callback) => ({type: OPEN_CONFIRM_POPUP, callback});
export const closeConfirmPopup = () => ({type: CLOSE_CONFIRM_POPUP});
export const confirmConfirmPopup = () => (dispatch) => {
    dispatch(closeConfirmPopup());
    confirmCallback()
};


export default confirmPopupReducer;
