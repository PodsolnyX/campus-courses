import {coursesAPI} from "../../api/coursesAPI";
import {setGroupCourses} from "./groupsReducer";
import {setErrorToast, setSuccessToast} from "./toasterReducer";

const
    SET_COURSE_DETAILS = "SET_COURSE_DETAILS",
    SET_USER_COURSES = "SET_USER_COURSES",
    SET_TAUGHT_COURSES = "SET_TAUGHT_COURSES",
    SET_LOADING_COURSE = "SET_LOADING_COURSE",

    OPEN_CREATE_COURSE_MODAL = "OPEN_CREATE_COURSE_MODAL",
    CLOSE_CREATE_COURSE_MODAL = "CLOSE_CREATE_COURSE_MODAL",
    SET_CREATE_COURSE_MODAL_DATA = "SET_CREATE_COURSE_MODAL_DATA",

    OPEN_EDIT_COURSE_MODAL = "OPEN_EDIT_COURSE_MODAL",
    CLOSE_EDIT_COURSE_MODAL = "CLOSE_EDIT_COURSE_MODAL",
    SET_EDIT_COURSE_MODAL_DATA = "SET_EDIT_COURSE_MODAL_DATA",

    OPEN_COURSE_STATUS_MODAL = "OPEN_COURSE_STATUS_MODAL",
    CLOSE_COURSE_STATUS_MODAL = "CLOSE_COURSE_STATUS_MODAL",
    EDIT_VALUE_COURSE_STATUS_MODAL = "EDIT_VALUE_COURSE_STATUS_MODAL",

    OPEN_MARK_MODAL = "OPEN_MARK_MODAL",
    CLOSE_MARK_MODAL = "CLOSE_MARK_MODAL",
    EDIT_VALUE_MARK_MODAL = "EDIT_VALUE_MARK_MODAL",

    OPEN_NOTICE_MODAL = "OPEN_NOTICE_MODAL",
    CLOSE_NOTICE_MODAL = "CLOSE_NOTICE_MODAL",
    EDIT_VALUE_NOTICE_MODAL = "EDIT_VALUE_NOTICE_MODAL",

    OPEN_TEACHER_MODAL = "OPEN_TEACHER_MODAL",
    CLOSE_TEACHER_MODAL = "CLOSE_TEACHER_MODAL",
    EDIT_VALUE_TEACHER_MODAL = "EDIT_VALUE_TEACHER_MODAL",

    SET_LOADING_MODAL_COURSE = "SET_LOADING_MODAL_COURSE"
;

let initialState = {
    course: [],
    userCourses: [],
    taughtCourses: [],
    createCourseModal: {
        isShow: false,
        currentCourse: {
            groupName: "",
            startYear: "",
            maxStudentsCount: "",
            semester: "Autumn",
            requirements: "",
            annotations: "",
            mainTeacherId: ""
        }
    },
    editCourseModal: {
        isShow: false,
        data: {
            requirements: "",
            annotations: ""
        }
    },
    courseStatusModal: {
        isShow: false,
        status: "",
        curStatus: ""
    },
    markModal: {
        isShow: false,
        data: {
            markType: "",
            mark: "",
            name: "",
            id: ""
        }
    },
    noticeModal: {
        isShow: false,
        data: {
            text: "",
            isImportant: false
        }
    },
    teacherModal: {
        isShow: false,
        userId: ""
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
        case SET_USER_COURSES:
            return {
                ...state,
                userCourses: action.data
            };
        case SET_TAUGHT_COURSES:
            return {
                ...state,
                taughtCourses: action.data
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

        case OPEN_CREATE_COURSE_MODAL:
            return {
                ...state,
                createCourseModal: {
                    ...state.createCourseModal,
                    isShow: true
                }
            };
        case CLOSE_CREATE_COURSE_MODAL:
            return {
                ...state,
                createCourseModal: {
                    ...state.createCourseModal,
                    isShow: false
                }
            };
        case SET_CREATE_COURSE_MODAL_DATA:
            return {
                ...state,
                createCourseModal: {
                    ...state.createCourseModal,
                    currentCourse: {
                        ...state.createCourseModal.currentCourse,
                        [action.keyValue]: action.value
                    }
                }
            };

        case OPEN_EDIT_COURSE_MODAL:
            return {
                ...state,
                editCourseModal: {
                    ...state.editCourseModal,
                    isShow: true,
                    data: action.initData
                }
            };
        case CLOSE_EDIT_COURSE_MODAL:
            return {
                ...state,
                editCourseModal: {
                    ...state.editCourseModal,
                    isShow: false
                }
            };
        case SET_EDIT_COURSE_MODAL_DATA:
            return {
                ...state,
                editCourseModal: {
                    ...state.editCourseModal,
                    data: {
                        ...state.editCourseModal.data,
                        [action.keyValue]: action.value
                    }
                }
            };

        case OPEN_COURSE_STATUS_MODAL:
            return {
                ...state,
                courseStatusModal: {
                    ...state.courseStatusModal,
                    isShow: true,
                    curStatus: action.curStatus
                }
            };
        case CLOSE_COURSE_STATUS_MODAL:
            return {
                ...state,
                courseStatusModal: {
                    ...state.courseStatusModal,
                    isShow: false
                }
            };
        case EDIT_VALUE_COURSE_STATUS_MODAL:
            return {
                ...state,
                courseStatusModal: {
                    ...state.courseStatusModal,
                    status: action.status
                }
            }

        case OPEN_MARK_MODAL:
            return {
                ...state,
                markModal: {
                    ...state.markModal,
                    isShow: true,
                    data: action.data
                }
            };
        case CLOSE_MARK_MODAL:
            return {
                ...state,
                markModal: {
                    ...state.markModal,
                    isShow: false
                }
            };
        case EDIT_VALUE_MARK_MODAL:
            return {
                ...state,
                markModal: {
                    ...state.markModal,
                    isShow: true,
                    data: {
                        ...state.markModal.data,
                        mark: action.value
                    }
                }
            }

        case OPEN_TEACHER_MODAL:
            return {
                ...state,
                teacherModal: {
                    ...state.teacherModal,
                    isShow: true
                }
            };
        case CLOSE_TEACHER_MODAL:
            return {
                ...state,
                teacherModal: {
                    ...state.teacherModal,
                    isShow: false
                }
            };
        case EDIT_VALUE_TEACHER_MODAL:
            return {
                ...state,
                teacherModal: {
                    ...state.teacherModal,
                    userId: action.userId
                }
            }

        case OPEN_NOTICE_MODAL:
            return {
                ...state,
                noticeModal: {
                    ...state.noticeModal,
                    isShow: true
                }
            };
        case CLOSE_NOTICE_MODAL:
            return {
                ...state,
                noticeModal: {
                    ...state.noticeModal,
                    isShow: false
                }
            };
        case EDIT_VALUE_NOTICE_MODAL:
            return {
                ...state,
                noticeModal: {
                    ...state.noticeModal,
                    data: {
                        ...state.noticeModal.data,
                        [action.keyValue]: action.value
                    }
                }
            }
        default:
            return state;
    }
}

export const setCourseDetails = (data) => ({type: SET_COURSE_DETAILS, data});
export const setUserCourses = (data) => ({type: SET_USER_COURSES, data});
export const setTaughtCourses = (data) => ({type: SET_TAUGHT_COURSES, data});
export const setLoadingCourse = (isLoading) => ({type: SET_LOADING_COURSE, isLoading});

export const openCreateCourseModal = () => ({type: OPEN_CREATE_COURSE_MODAL});
export const closeCreateCourseModal = () => ({type: CLOSE_CREATE_COURSE_MODAL});
export const setCreateCourseModalData = (keyValue, value) => ({type: SET_CREATE_COURSE_MODAL_DATA, keyValue, value});

export const openEditCourseModal = (initData) => ({type: OPEN_EDIT_COURSE_MODAL, initData});
export const closeEditCourseModal = () => ({type: CLOSE_EDIT_COURSE_MODAL});
export const setEditCourseModalData = (keyValue, value) => ({type: SET_EDIT_COURSE_MODAL_DATA, keyValue, value});

export const openCourseStatusModal = (curStatus) => ({type: OPEN_COURSE_STATUS_MODAL, curStatus});
export const closeCourseStatusModal = () => ({type: CLOSE_COURSE_STATUS_MODAL});
export const editValueCourseStatusModal = (status) => ({type: EDIT_VALUE_COURSE_STATUS_MODAL, status});

export const openMarkModal = (data) => ({type: OPEN_MARK_MODAL, data});
export const closeMarkModal = () => ({type: CLOSE_MARK_MODAL});
export const editValueMarkModal = (value) => ({type: EDIT_VALUE_MARK_MODAL, value});

export const openTeacherModal = () => ({type: OPEN_TEACHER_MODAL});
export const closeTeacherModal = () => ({type: CLOSE_TEACHER_MODAL});
export const editValueTeacherModal = (userId) => ({type: EDIT_VALUE_TEACHER_MODAL, userId});

export const openNoticeModal = () => ({type: OPEN_NOTICE_MODAL});
export const closeNoticeModal = () => ({type: CLOSE_NOTICE_MODAL});
export const editDataNoticeModal = (keyValue, value) => ({type: EDIT_VALUE_NOTICE_MODAL, keyValue, value});

export const setLoadingModalCourse = (isLoading) => ({type: SET_LOADING_MODAL_COURSE, isLoading});

export const getCourseDetails = (id) => (dispatch) => {
    dispatch(setLoadingCourse(true));
    coursesAPI.getCourseDetails(id).then(response => {
        if (response.status === 200)
            dispatch(setCourseDetails(response.data));
        dispatch(setLoadingCourse(false));
    })
}

export const getUserCourses = () => (dispatch) => {
    dispatch(setLoadingCourse(true));
    coursesAPI.getUserCourses().then(response => {
        if (response.status === 200)
            dispatch(setUserCourses(response.data));
        dispatch(setLoadingCourse(false));
    })
}

export const getTaughtCourses = () => (dispatch) => {
    dispatch(setLoadingCourse(true));
    coursesAPI.getTaughtCourses().then(response => {
        if (response.status === 200)
            dispatch(setTaughtCourses(response.data));
        dispatch(setLoadingCourse(false));
    })
}

export const createCourse = (groupId) => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    coursesAPI.createCourse(groupId, getState().coursePage.createCourseModal.currentCourse).then(response => {
        if (response.status === 200) {
            dispatch(closeCreateCourseModal());
            dispatch(setSuccessToast("Курс успешно создан"));
            dispatch(setGroupCourses(response.data));
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalCourse(false));
    })
}

export const editCourse = () => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.editCourse(id, getState().coursePage.editCourseModal.data).then(response => {
        if (response.status === 200) {
            dispatch(closeEditCourseModal());
            dispatch(setSuccessToast("Курс успешно изменён"));
            dispatch(setCourseDetails(response.data))
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalCourse(false));
    })
}

export const deleteCourse = () => (dispatch, getState) => {
    dispatch(setLoadingCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.deleteCourse(id).then(response => {
        if (response.status === 200) {
            dispatch(setGroupCourses([]));
            dispatch(setSuccessToast("Курс успешно удалён"));
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingCourse(false));
    })
}

export const createNotice = () => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.createNotice(id, getState().coursePage.noticeModal.data).then(response => {
        if (response.status === 200) {
            dispatch(closeNoticeModal());
            dispatch(setSuccessToast("Уведомление успешно отправлено"));
            dispatch(setCourseDetails(response.data))
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalCourse(false));
    })
}

export const setCourseStatus = () => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.setCourseStatus(id, getState().coursePage.courseStatusModal.status).then(response => {
        if (response.status === 200) {
            dispatch(closeCourseStatusModal());
            dispatch(setSuccessToast("Статус успешно изменён"));
            dispatch(setCourseDetails(response.data))
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalCourse(false));
    })
}

export const addCourseTeacher = () => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.addCourseTeacher(id, getState().coursePage.teacherModal.userId).then(response => {
        if (response.status === 200) {
            dispatch(closeTeacherModal());
            dispatch(setSuccessToast("Преподаватель успешно добавлен"));
            dispatch(setCourseDetails(response.data))
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalCourse(false));
    })
}

export const editStudentMark = () => (dispatch, getState) => {
    dispatch(setLoadingModalCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.editStudentMark(id, getState().coursePage.markModal.data).then(response => {
        if (response.status === 200) {
            dispatch(setCourseDetails(response.data))
            dispatch(closeMarkModal());
            dispatch(setSuccessToast("Оценка успешно изменена"));
        }
        else dispatch(setErrorToast(response.data.message));
        dispatch(setLoadingModalCourse(false));
    })
}

export const signUpCourse = () => (dispatch, getState) => {
    dispatch(setLoadingCourse(true));
    const id = getState().coursePage.course.id;
    coursesAPI.signUpCourse(id).then(response => {
        if (response.status === 200) {
            dispatch(setSuccessToast("Заявка успешно отправлена"));
            dispatch(getUserCourses());
            dispatch(getCourseDetails(id));
        }
        else dispatch(setErrorToast("Что-то пошло не так"));
        dispatch(setLoadingCourse(false));
    })
}

export const editStudentCourseStatus = (studentId, status) => (dispatch, getState) => {
    dispatch(setLoadingCourse(true));
    const courseId = getState().coursePage.course.id;
    coursesAPI.editStudentCourseStatus(courseId, studentId, status).then(response => {
        if (response.status === 200) {
            dispatch(setSuccessToast("Успешно"));
            dispatch(setCourseDetails(response.data))
        }
        else dispatch(setErrorToast("Что-то пошло не так"));
        dispatch(setLoadingCourse(false));
    })
}

export default coursesReducer;