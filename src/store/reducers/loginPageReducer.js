const
    SET_LOGIN_FORM_DATA = "SET_LOGIN_FORM_DATA",
    LOGIN_USER = "REGISTER_USER"
;

let initialState = {
    formData : {
        email: "",
        password: ""
    }
};

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_FORM_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.keyValue] : action.value
                }
            };
        case LOGIN_USER:
            console.log(state.formData)
            return {
                ...state
            }
        default:
            return state;
    }
}

export const setLoginFormData = (keyValue, value) => ({type: SET_LOGIN_FORM_DATA, keyValue, value});
export const loginUser = () => ({type: LOGIN_USER});

export default loginPageReducer;