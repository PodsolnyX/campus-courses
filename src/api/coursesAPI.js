import {toastError} from "../helpers/toaster";
import {instance} from "./instance";

const getCourseDetails = (id) => {
    return instance.get(`courses/${id}/details`)
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            if (error.response.status === 404)
                toastError("Данный курс не найден")
            else toastError("Что-то пошло не так")
        });
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
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const editCourse = (id, data) => {
    return instance.put(`courses/${id}`, {
        requirements: data.requirements,
        annotations: data.annotations
    })
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const deleteCourse = (id) => {
    return instance.delete(`courses/${id}`)
        .then(response => {
            if (response.status === 200) return 200;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const createNotice = (id, data) => {
    return instance.post(`courses/${id}/notifications`, {
        text: data.text,
        isImportant: data.isImportant
    })
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const setCourseStatus = (id, status) => {
    return instance.post(`courses/${id}/status`, {
        status: status
    })
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

export const coursesAPI = {
    getCourseDetails: getCourseDetails,
    createCourse: createCourse,
    editCourse: editCourse,
    deleteCourse: deleteCourse,
    createNotice: createNotice,
    setCourseStatus: setCourseStatus
};