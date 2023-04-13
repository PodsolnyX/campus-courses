import {userAPI} from "../../api/userAPI";
import {toastSuccess} from "../../helpers/toaster";
import {getUserProfile, setIsAuth} from "./userReducer";

const
    SET_REGISTRATION_FORM_DATA = "SET_REGISTRATION_FORM_DATA",
    SET_LOADING_REGISTER = "SET_LOADING_REGISTER"
;

let initialState = {
    formData: {
        name: "",
        email: "",
        birthDate: "",
        password: "",
        passwordConfirmation: ""
    },
    isLoading: false
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
        case SET_LOADING_REGISTER:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setRegistrationFormData = (keyValue, value) => ({type: SET_REGISTRATION_FORM_DATA, keyValue, value});
export const setLoadingRegister = (isLoading) => ({type: SET_LOADING_REGISTER, isLoading});

export const registerUser = () => (dispatch, getState) => {
    dispatch(setLoadingRegister(true))
    userAPI.registerUser(getState().registrationPage.formData).then(data => {
        if (data) {
            localStorage.setItem('token', data.token);
            toastSuccess("Вы успешно зарегистрировались!");
            dispatch(setIsAuth());
            dispatch(getUserProfile());
        }
        dispatch(setLoadingRegister(false))
    });

}

export default registrationPageReducer;