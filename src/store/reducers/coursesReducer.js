import {coursesAPI} from "../../api/coursesAPI";
import {toastSuccess} from "../../helpers/toaster";
import {getGroupCourses} from "./groupsReducer";

const
    SET_COURSE_DETAILS = "SET_COURSE_DETAILS",
    SET_LOADING_COURSE = "SET_LOADING_COURSE",
    OPEN_COURSE_MODAL = "OPEN_COURSE_MODAL",
    CLOSE_COURSE_MODAL = "CLOSE_COURSE_MODAL",
    SET_COURSE_MODAL_DATA = "SET_COURSE_MODAL_DATA",
    SET_LOADING_MODAL_COURSE = "SET_LOADING_MODAL_COURSE"
;

let initialState = {
    course: [],
    isShowCourseModal: false,
    currentCourse: {
        groupName: "",
        startYear: "",
        maxStudentsCount: "",
        semester: "Autumn",
        requirements: "",
        annotations: "",
        mainTeacherId: ""
    },
    isLoading: false,
    isLoadingModal: false
};

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSE_DETAILS:
            return {
                ...state,
                course: action.data
            };
        case SET_LOADING_COURSE:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_LOADING_MODAL_COURSE:
            return {
                ...state,
                isLoadingModal: action.isLoading
            };
        case OPEN_COURSE_MODAL:
            return {
                ...state,
                isShowCourseModal: true
            };
        case CLOSE_COURSE_MODAL:
            return {
                ...state,
                isShowCourseModal: false
            };
        case SET_COURSE_MODAL_DATA:
            return {
                ...state,
                currentCourse: {
                    ...state.currentCourse,
                    [action.keyValue]: action.value
                }
            };
        default:
            return state;
    }
}

export const setCourseDetails = (data) => ({type: SET_COURSE_DETAILS, data});
export const setLoadingCourse = (isLoading) => ({type: SET_LOADING_COURSE, isLoading});

export const openCourseModal = () => ({type: OPEN_COURSE_MODAL});
export const closeCourseModal = () => ({type: CLOSE_COURSE_MODAL});
export const setCourseModalData = (keyValue, value) => ({type: SET_COURSE_MODAL_DATA, keyValue, value});
export const setLoadingModalCourse = (isLoading) => ({type: SET_LOADING_MODAL_COURSE, isLoading});

export const getCourseDetails = (id) => (dispatch) => {
    dispatch(setLoadingCourse(true));
    coursesAPI.getCourseDetails(id).then(data => {
        if (data) dispatch(setCourseDetails(data));
        dispatch(setLoadingCourse(false));
    })
}

export const createCourse = (groupId) => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    coursesAPI.createCourse(groupId, getState().coursePage.currentCourse).then(data => {
        if (data) {
            dispatch(closeCourseModal());
            toastSuccess("Курс успешно создан")
            dispatch(getGroupCourses(groupId));
        }
        dispatch(setLoadingModalCourse(false));
    })
}

export default coursesReducer;