import {userAPI} from "../../api/userAPI";

const SET_USER_DATA = "SET_USER_DATA",
    SET_USER_ROLES = "SET_USER_ROLES",
    CLEAR_USER_DATA = "CLEAR_USER_DATA",
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_USERS = "SET_USERS"
;

let initialState = {
    userData: {},
    userRoles: [],
    users: [],
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
        case SET_USERS:
            action.data.forEach((el) => {
                Object.assign(el, {
                    ["value"]: el["id"],
                    ["label"]: el["fullName"],
                })
            });
            return {
                ...state,
                users: action.data
            }
        default:
            return state;
    }
}

export const setUserProfile = (userData) => ({type: SET_USER_DATA, userData});
export const setUserRoles = (userRoles) => ({type: SET_USER_ROLES, userRoles});
export const setIsAuth = () => ({type: SET_IS_AUTH});
export const clearUserProfile = () => ({type: CLEAR_USER_DATA});
export const setUsers = (data) => ({type: SET_USERS, data});

export const getUserProfile = () => (dispatch) => {
    userAPI.getProfile()
        .then(response => {
            if (response.status === 200)
                dispatch(setUserProfile(response.data));
            else dispatch(clearUserProfile())
        })
        .then(() => userAPI.getRoles().then(response => {
            if (response.status === 200)
                dispatch(setUserRoles(response.data));
        }));
}

export const logoutUser = () => (dispatch) => {
    userAPI.logoutUser().then(response => {
        if (response.status === 200) {
            localStorage.removeItem('token');
            dispatch(clearUserProfile());
        }
    })
}

export const getUsers = () => (dispatch) => {
    userAPI.getUsers().then(response => {
        if (response.status === 200)
            dispatch(setUsers(response.data));
    })
}

export default userReducer;