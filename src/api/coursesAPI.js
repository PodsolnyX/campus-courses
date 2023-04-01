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

export const coursesAPI = {
    getCourseDetails: getCourseDetails,
    createCourse: createCourse
};