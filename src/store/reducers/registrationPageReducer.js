import {userAPI} from "../../api/userAPI";
import {getUserProfile, setIsAuth} from "./userReducer";
import {setErrorToast, setSuccessToast} from "./toasterReducer";

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
    userAPI.registerUser(getState().registrationPage.formData).then(response => {
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            dispatch(setSuccessToast("Вы успешно зарегистрировались!"));
            dispatch(setIsAuth());
            dispatch(getUserProfile());
        }
        else if (response.status === 409)
            dispatch(setErrorToast("Аккаунт с данным email-адресом уже существует"));
        else dispatch(setErrorToast("Неверный формат данных"));

        dispatch(setLoadingRegister(false))
    });

}

export default registrationPageReducer;