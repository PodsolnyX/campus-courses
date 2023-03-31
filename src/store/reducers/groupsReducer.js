import {groupsAPI} from "../../api/groupsAPI";

const
    OPEN_GROUPS_MODAL = "OPEN_GROUPS_MODAL",
    SET_GROUPS = "SET_GROUPS",
    SET_GROUP_COURSES = "SET_GROUP_COURSES",
    CLOSE_GROUPS_MODAL = "CLOSE_GROUPS_MODAL",
    EDIT_VALUE_GROUPS_MODAL = "EDIT_VALUE_GROUPS_MODAL",
    OPEN_DELETE_POPUP = "OPEN_DELETE_POPUP",
    CLOSE_DELETE_POPUP = "CLOSE_DELETE_POPUP",
    SET_LOADING_GROUPS = "SET_LOADING_GROUPS"
;

let initialState = {
    isShowModal: false,
    isShowPopup: false,
    isEdit: false,
    currentGroup: {},
    groups: [],
    groupCourses: [],
    isLoading: false
};

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return {
                ...state,
                groups: action.data
            };
        case SET_GROUP_COURSES:
            return {
                ...state,
                groupCourses: action.data
            };
        case SET_LOADING_GROUPS:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case OPEN_GROUPS_MODAL:
            return {
                ...state,
                isShowModal: true,
                isEdit: action.isEdit,
                currentGroup: action.data
            };
        case CLOSE_GROUPS_MODAL:
            return {
                ...state,
                isShowModal: false
            };
        case EDIT_VALUE_GROUPS_MODAL:
            return {
                ...state,
                value: action.value
            };
        case OPEN_DELETE_POPUP:
            return {
                ...state,
                isShowPopup: true
            };
        case CLOSE_DELETE_POPUP:
            return {
                ...state,
                isShowPopup: false
            };
        default:
            return state;
    }
}

export const openGroupsModal = (data, isEdit) => ({type: OPEN_GROUPS_MODAL, data, isEdit});
export const closeGroupsModal = () => ({type: CLOSE_GROUPS_MODAL});
export const editValueGroupsModal = (value) => ({type: EDIT_VALUE_GROUPS_MODAL, value})

export const openDeletePopup = () => ({type: OPEN_DELETE_POPUP});
export const closeDeletePopup = () => ({type: CLOSE_DELETE_POPUP});

export const setGroups = (data) => ({type: SET_GROUPS, data});
export const setGroupCourses = (data) => ({type: SET_GROUP_COURSES, data})
export const setLoadingGroups = (isLoading) => ({type: SET_LOADING_GROUPS, isLoading});

export const getGroups = () => (dispatch) => {
    dispatch(setLoadingGroups(true));
    groupsAPI.getGroups().then(data => {
        if (data) dispatch(setGroups(data));
        dispatch(setLoadingGroups(false));
    })
}

export const getGroupCourses = (id) => (dispatch) => {
    dispatch(setLoadingGroups(true));
    groupsAPI.getGroupCourses(id).then(data => {
        if (data) dispatch(setGroupCourses(data));
        dispatch(setLoadingGroups(false));
    })
}

export default groupsReducer;