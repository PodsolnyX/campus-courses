import {instance} from "./instance";

const getCourseDetails = (id) => {
    return instance.get(`courses/${id}/details`)
        .then(response => response)
        .catch(error => error.response);
}

const getUserCourses = () => {
    return instance.get(`courses/my`)
        .then(response => response)
        .catch(error => error.response);
}

const getTaughtCourses = () => {
    return instance.get(`courses/teaching`)
        .then(response => response)
        .catch(error => error.response);
}

const createCourse = (id, data) => {
    return instance.post(`courses/${id}`, {
        name: data.groupName,
        startYear: data.startYear,
        maximumStudentsCount: data.maxStudentsCount,
        semester: data.semester,
        requirements: data.requirements,
        annotations: data.annotations,
        mainTeacherId: data.mainTeacherId
    })
        .then(response => response)
        .catch(error => error.response);
}

const editCourse = (id, data) => {
    return instance.put(`courses/${id}`, {
        requirements: data.requirements,
        annotations: data.annotations
    })
        .then(response => response)
        .catch(error => error.response);
}

const deleteCourse = (id) => {
    return instance.delete(`courses/${id}`)
        .then(response => response)
        .catch(error => error.response);
}

const createNotice = (id, data) => {
    return instance.post(`courses/${id}/notifications`, {
        text: data.text,
        isImportant: data.isImportant
    })
        .then(response => response)
        .catch(error => error.response);
}

const setCourseStatus = (id, status) => {
    return instance.post(`courses/${id}/status`, {
        status: status
    })
        .then(response => response)
        .catch(error => error.response);
}

const signUpCourse = (id) => {
    return instance.post(`courses/${id}/sign-up`)
        .then(response => response)
        .catch(error => error.response);
}

const editStudentCourseStatus = (courseId, studentId, status) => {
    return instance.post(`courses/${courseId}/student-status/${studentId}`, {
        status: status
    })
        .then(response => response)
        .catch(error => error.response);
}

const editStudentMark = (courseId, data) => {
    return instance.post(`courses/${courseId}/marks/${data.id}`, {
        markType: data.markType,
        mark: data.mark
    })
        .then(response => response)
        .catch(error => error.response);
}

const addCourseTeacher = (courseId, userId) => {
    return instance.post(`courses/${courseId}/teachers`, {
        userId: userId
    })
        .then(response => response)
        .catch(error => error.response);
}

export const coursesAPI = {
    getCourseDetails: getCourseDetails,
    getUserCourses: getUserCourses,
    getTaughtCourses: getTaughtCourses,
    createCourse: createCourse,
    editCourse: editCourse,
    deleteCourse: deleteCourse,
    createNotice: createNotice,
    setCourseStatus: setCourseStatus,
    signUpCourse: signUpCourse,
    editStudentCourseStatus: editStudentCourseStatus,
    editStudentMark: editStudentMark,
    addCourseTeacher: addCourseTeacher
};