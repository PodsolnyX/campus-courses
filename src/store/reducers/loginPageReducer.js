import {userAPI} from "../../api/userAPI";
import {toastSuccess} from "../../helpers/toaster";
import {getUserProfile, setIsAuth, setUserProfile, setUserRoles} from "./userReducer";

const
    SET_LOGIN_FORM_DATA = "SET_LOGIN_FORM_DATA"
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
        default:
            return state;
    }
}

export const setLoginFormData = (keyValue, value) => ({type: SET_LOGIN_FORM_DATA, keyValue, value});
export const loginUser = () => (dispatch, getState) => {
    userAPI.loginUser(getState().loginPage.formData).then(data => {
        if (data) {
            localStorage.setItem('token', data.token);
            dispatch(setIsAuth());
            dispatch(getUserProfile());
            toastSuccess("Вы успешно авторизовались!")
        }
    });

}

export default loginPageReducer;