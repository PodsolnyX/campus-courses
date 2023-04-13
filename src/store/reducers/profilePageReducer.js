import {userAPI} from "../../api/userAPI";
import {toastSuccess} from "../../helpers/toaster";

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
    userAPI.editUserProfile(getState().profilePage.formData).then(data => {
        if (data) {
            userAPI.getProfile().then(data => dispatch(initProfilePageData(data)));
            dispatch(setLoadingProfilePage(false))
            toastSuccess("Вы успешно изменили профиль!");
        }
    });
}

export const getUserProfileForPage = () => (dispatch) => {
    dispatch(setLoadingProfilePage(true))
    userAPI.getProfile().then(data => {
        if (data) dispatch(initProfilePageData(data));
        dispatch(setLoadingProfilePage(false))
    })
}

export default profilePageReducer;