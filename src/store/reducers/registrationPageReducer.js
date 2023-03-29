const
    SET_REGISTRATION_FORM_DATA = "SET_REGISTRATION_FORM_DATA",
    REGISTER_USER = "REGISTER_USER"
;

let initialState = {
    formData : {
        name: "",
        email: "",
        birthDate: "",
        password: "",
        passwordConfirmation: ""
    }
};

const registrationPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_FORM_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.keyValue] : action.value
                }
            };
        case REGISTER_USER:
            console.log(state.formData)
            return {
                ...state
            }
        default:
            return state;
    }
}

export const setRegistrationFormData = (keyValue, value) => ({type: SET_REGISTRATION_FORM_DATA, keyValue, value});
export const registerUser = () => ({type: REGISTER_USER});

export default registrationPageReducer;