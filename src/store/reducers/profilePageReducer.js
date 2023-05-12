import {userAPI} from "../../api/userAPI";
import {setErrorToast, setSuccessToast} from "./toasterReducer";

const
    SET_PROFILE_FORM_DATA = "SET_PROFILE_FORM_DATA",
    INIT_PROFILE_PAGE_DATA = "INIT_PROFILE_PAGE_DATA",
    SET_LOADING_PROFILE_PAGE = "SET_LOADING_PROFILE_PAGE",
    SET_IS_EDIT_PROFILE_PAGE = "SET_IS_EDIT_PROFILE_PAGE"
;

let initialState = {
    formData: {},
    isLoading: false,
    isEdit: false
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PROFILE_PAGE_DATA:
            return {
                ...state,
                formData: action.data,
                isEdit: false
            };
        case SET_LOADING_PROFILE_PAGE:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_IS_EDIT_PROFILE_PAGE:
            return {
                ...state,
                isEdit: true
            };
        case SET_PROFILE_FORM_DATA:
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

export const setProfileFormData = (keyValue, value) => ({type: SET_PROFILE_FORM_DATA, keyValue, value});
export const initProfilePageData = (data) => ({type: INIT_PROFILE_PAGE_DATA, data});
const setLoadingProfilePage = (isLoading) => ({type: SET_LOADING_PROFILE_PAGE, isLoading});
export const setIsEditProfilePage = () => ({type: SET_IS_EDIT_PROFILE_PAGE});

export const saveProfileData = () => (dispatch, getState) => {
    dispatch(setLoadingProfilePage(true))
    userAPI.editUserProfile(getState().profilePage.formData).then(response => {
        if (response.status === 200) {
            dispatch(getUserProfileForPage());
            dispatch(setSuccessToast("Вы успешно изменили профиль!"));
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingProfilePage(false));
    });
}

export const getUserProfileForPage = () => (dispatch) => {
    dispatch(setLoadingProfilePage(true))
    userAPI.getProfile().then(response => {
        if (response.status === 200)
            dispatch(initProfilePageData(response.data));
        dispatch(setLoadingProfilePage(false))
    })
}

export default profilePageReducer;