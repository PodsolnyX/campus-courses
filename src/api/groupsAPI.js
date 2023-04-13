import {toastError} from "../helpers/toaster";
import {instance} from "./instance";

const getGroups = () => {
    return instance.get("groups")
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const getGroupCourses = (id) => {
    return instance.get(`groups/${id}`)
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            if (error.response.status === 404)
                toastError("Данная группа не найдена")
            else toastError("Что-то пошло не так")
        });
}

const createGroup = (name) => {
    return instance.post(`groups`, {
        name: name
    })
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const editGroup = (id, name) => {
    return instance.put(`groups/${id}`, {
        name: name
    })
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const deleteGroup = (id) => {
    return instance.delete(`groups/${id}`)
        .then(response => {
            if (response.status === 200) return 200;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

export const groupsAPI = {
    getGroups: getGroups,
    getGroupCourses: getGroupCourses,
    createGroup: createGroup,
    editGroup: editGroup,
    deleteGroup: deleteGroup
};