import {groupsAPI} from "../../api/groupsAPI";
import {toastSuccess} from "../../helpers/toaster";

const
    OPEN_GROUPS_MODAL = "OPEN_GROUPS_MODAL",
    SET_GROUPS = "SET_GROUPS",
    SET_GROUP_COURSES = "SET_GROUP_COURSES",
    CLOSE_GROUPS_MODAL = "CLOSE_GROUPS_MODAL",
    EDIT_NAME_GROUPS_MODAL = "EDIT_NAME_GROUPS_MODAL",
    OPEN_DELETE_POPUP = "OPEN_DELETE_POPUP",
    CLOSE_DELETE_POPUP = "CLOSE_DELETE_POPUP",
    SET_LOADING_GROUPS = "SET_LOADING_GROUPS",
    SET_LOADING_MODAL_GROUPS = "SET_LOADING_MODAL_GROUPS"
;

let initialState = {
    isShowModal: false,
    isShowPopup: false,
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
        case OPEN_DELETE_POPUP:
            return {
                ...state,
                isShowPopup: true,
                currentGroup: action.data
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
export const editNameGroupsModal = (name) => ({type: EDIT_NAME_GROUPS_MODAL, name})

export const openDeletePopup = (data) => ({type: OPEN_DELETE_POPUP, data});
export const closeDeletePopup = () => ({type: CLOSE_DELETE_POPUP});

export const setGroups = (data) => ({type: SET_GROUPS, data});
export const setGroupCourses = (data) => ({type: SET_GROUP_COURSES, data})
export const setLoadingGroups = (isLoading) => ({type: SET_LOADING_GROUPS, isLoading});
export const setLoadingModalGroups = (isLoading) => ({type: SET_LOADING_MODAL_GROUPS, isLoading});

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

export const createGroup = () => (dispatch, getState) => {
    dispatch(setLoadingModalGroups(true));
    groupsAPI.createGroup(getState().groupsPage.currentGroup.name).then(data => {
        if (data) {
            dispatch(closeGroupsModal());
            toastSuccess("Группа успешно создана");
            dispatch(getGroups());
        }
        dispatch(setLoadingModalGroups(false));
    })
}

export const editGroup = () => (dispatch, getState) => {
    dispatch(setLoadingModalGroups(true));
    groupsAPI.editGroup(getState().groupsPage.currentGroup.id,
        getState().groupsPage.currentGroup.name)
        .then(data => {
            if (data) {
                dispatch(closeGroupsModal());
                toastSuccess("Группа успешно изменена");
                dispatch(getGroups());
            }
            dispatch(setLoadingModalGroups(false));
        })
}

export const deleteGroup = () => (dispatch, getState) => {
    dispatch(setLoadingModalGroups(true));
    groupsAPI.deleteGroup(getState().groupsPage.currentGroup.id).then(data => {
        if (data === 200) {
            dispatch(closeDeletePopup());
            toastSuccess("Группа успешно удалена");
            dispatch(getGroups());
        }
        dispatch(setLoadingModalGroups(false));
    })
}

export default groupsReducer;