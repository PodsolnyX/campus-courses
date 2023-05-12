import {userAPI} from "../../api/userAPI";
import {getUserProfile, setIsAuth} from "./userReducer";
import {setErrorToast, setSuccessToast} from "./toasterReducer";

const
    SET_LOGIN_FORM_DATA = "SET_LOGIN_FORM_DATA",
    SET_LOADING_LOGIN = "SET_LOADING_LOGIN"
;

let initialState = {
    formData : {
        email: "",
        password: ""
    },
    isLoading: false
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
        case SET_LOADING_LOGIN:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setLoginFormData = (keyValue, value) => ({type: SET_LOGIN_FORM_DATA, keyValue, value});
export const setLoadingLogin = (isLoading) => ({type: SET_LOADING_LOGIN, isLoading});

export const loginUser = () => (dispatch, getState) => {
    dispatch(setLoadingLogin(true));
    userAPI.loginUser(getState().loginPage.formData).then(response => {
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            dispatch(setIsAuth());
            dispatch(getUserProfile());
            dispatch(setSuccessToast("Вы успешно авторизовались!"));
        }
        else dispatch(setErrorToast("Неверный логин или пароль"));

        dispatch(setLoadingLogin(false));
    });

}

export default loginPageReducer;