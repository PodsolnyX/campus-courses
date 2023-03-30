import {userAPI} from "../../api/userAPI";
import {toastSuccess} from "../../helpers/toaster";
import {setIsAuth, setUserProfile, setUserRoles} from "./userReducer";

const
    SET_REGISTRATION_FORM_DATA = "SET_REGISTRATION_FORM_DATA"
;

let initialState = {
    formData: {
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
                    [action.keyValue]: action.value
                }
            };
        default:
            return state;
    }
}

export const setRegistrationFormData = (keyValue, value) => ({type: SET_REGISTRATION_FORM_DATA, keyValue, value});

export const registerUser = () => (dispatch, getState) => {
    userAPI.registerUser(getState().registrationPage.formData).then(data => {
        if (data) {
            localStorage.setItem('token', data.token);
            toastSuccess("Вы успешно зарегистрировались!");
            dispatch(setIsAuth());
            userAPI.getProfile().then(data => dispatch(setUserProfile(data)));
            userAPI.getRoles().then(data => dispatch(setUserRoles(data)))
        }
    });

}

export default registrationPageReducer;