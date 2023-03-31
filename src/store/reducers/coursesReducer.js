import {coursesAPI} from "../../api/coursesAPI";

const
    SET_COURSE_DETAILS = "SET_COURSE_DETAILS",
    SET_LOADING_COURSE = "SET_LOADING_COURSE"
;

let initialState = {
    course: [],
    isLoading: false
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
        default:
            return state;
    }
}

export const setCourseDetails = (data) => ({type: SET_COURSE_DETAILS, data});
export const setLoadingCourse = (isLoading) => ({type: SET_LOADING_COURSE, isLoading});

export const getCourseDetails = (id) => (dispatch) => {
    dispatch(setLoadingCourse(true));
    coursesAPI.getCourseDetails(id).then(data => {
        if (data) dispatch(setCourseDetails(data));
        dispatch(setLoadingCourse(false));
    })
}

export default coursesReducer;