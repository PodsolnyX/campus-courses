import {toastError} from "../helpers/toaster";
import {instance} from "./instance";

const getCourseDetails = (id) => {
    return instance.get(`courses/${id}/details`)
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            if (error.response.status === 404)
                toastError("Данный курс не найдена")
            else toastError("Что-то пошло не так")
        });
}

export const coursesAPI = {
    getCourseDetails: getCourseDetails
};