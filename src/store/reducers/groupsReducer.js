import {groupsAPI} from "../../api/groupsAPI";
import {setErrorToast, setSuccessToast} from "./toasterReducer";

const
    OPEN_GROUPS_MODAL = "OPEN_GROUPS_MODAL",
    SET_GROUPS = "SET_GROUPS",
    SET_GROUP_COURSES = "SET_GROUP_COURSES",
    CLOSE_GROUPS_MODAL = "CLOSE_GROUPS_MODAL",
    EDIT_NAME_GROUPS_MODAL = "EDIT_NAME_GROUPS_MODAL",
    SET_LOADING_GROUPS = "SET_LOADING_GROUPS",
    SET_LOADING_MODAL_GROUPS = "SET_LOADING_MODAL_GROUPS"
;

let initialState = {
    isShowModal: false,
    isEdit: false,
    currentGroup: {},
    groups: [],
    groupCourses: [],
    isLoading: false,
    isLoadingModal: false
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
        case SET_LOADING_MODAL_GROUPS:
            return {
                ...state,
                isLoadingModal: action.isLoading
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
        case EDIT_NAME_GROUPS_MODAL:
            return {
                ...state,
                currentGroup: {
                    ...state.currentGroup,
                    name: action.name
                }
            };
        default:
            return state;
    }
}

export const openGroupsModal = (data, isEdit) => ({type: OPEN_GROUPS_MODAL, data, isEdit});
export const closeGroupsModal = () => ({type: CLOSE_GROUPS_MODAL});
export const editNameGroupsModal = (name) => ({type: EDIT_NAME_GROUPS_MODAL, name})

export const setGroups = (data) => ({type: SET_GROUPS, data});
export const setGroupCourses = (data) => ({type: SET_GROUP_COURSES, data})
export const setLoadingGroups = (isLoading) => ({type: SET_LOADING_GROUPS, isLoading});
export const setLoadingModalGroups = (isLoading) => ({type: SET_LOADING_MODAL_GROUPS, isLoading});

export const getGroups = () => (dispatch) => {
    dispatch(setLoadingGroups(true));
    groupsAPI.getGroups().then(response => {
        if (response.status === 200)
            dispatch(setGroups(response.data));
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingGroups(false));
    })
}

export const getGroupCourses = (id) => (dispatch) => {
    dispatch(setLoadingGroups(true));
    groupsAPI.getGroupCourses(id).then(response => {
        if (response.status === 200)
            dispatch(setGroupCourses(response.data));
        dispatch(setLoadingGroups(false));
    })
}

export const createGroup = () => (dispatch, getState) => {
    dispatch(setLoadingModalGroups(true));
    groupsAPI.createGroup(getState().groupsPage.currentGroup.name).then(response => {
        if (response.status === 200) {
            dispatch(closeGroupsModal());
            dispatch(setSuccessToast("Группа успешно создана"));
            dispatch(getGroups());
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalGroups(false));
    })
}

export const editGroup = () => (dispatch, getState) => {
    dispatch(setLoadingModalGroups(true));
    groupsAPI.editGroup(getState().groupsPage.currentGroup.id,
        getState().groupsPage.currentGroup.name)
        .then(response => {
            if (response.status === 200) {
                dispatch(closeGroupsModal());
                dispatch(setSuccessToast("Группа успешно изменена"));
                dispatch(getGroups());
            }
            else dispatch(setErrorToast(response.data.message));
            dispatch(setLoadingModalGroups(false));
        })
}

export const deleteGroup = (currentGroup) => (dispatch) => {
    dispatch(setLoadingModalGroups(true));
    groupsAPI.deleteGroup(currentGroup.id).then(response => {
        if (response.status === 200) {
            dispatch(setSuccessToast("Группа успешно удалена"));
            dispatch(getGroups());
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalGroups(false));
    })
}

export default groupsReducer;