import {userAPI} from "../../api/userAPI";

const SET_USER_DATA = "SET_USER_DATA",
    SET_USER_ROLES = "SET_USER_ROLES",
    CLEAR_USER_DATA = "CLEAR_USER_DATA",
    SET_IS_AUTH = "SET_IS_AUTH"
;

let initialState = {
    userData : {},
    userRoles: [],
    isAuth: !!localStorage.getItem("token")
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            };
        case SET_USER_ROLES:
            return {
                ...state,
                userRoles: action.userRoles
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: true
            };
        case CLEAR_USER_DATA:
            return {
                ...state,
                userRoles: {},
                userData: [],
                isAuth: false
            };
        default:
            return state;
    }
}

export const setUserProfile = (userData) => ({type: SET_USER_DATA, userData});
export const setUserRoles = (userRoles) => ({type: SET_USER_ROLES, userRoles});
export const setIsAuth = () => ({type: SET_IS_AUTH});
export const clearUserProfile = () => ({type: CLEAR_USER_DATA});

export const getUserProfile = () => (dispatch) => {
    userAPI.getProfile().then(data => {
        if (data) dispatch(setUserProfile(data));
        else dispatch(clearUserProfile())
    }).then(() => userAPI.getRoles().then(data => {
        if (data) dispatch(setUserRoles(data));
    }));
}

export const logoutUser = () => (dispatch) => {
    userAPI.logoutUser().then(data => {
        if (data) {
            localStorage.removeItem('token');
            dispatch(clearUserProfile());
        }
    })
}

export default userReducer;