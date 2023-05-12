import {instance} from "./instance";

const getGroups = () => {
    return instance.get("groups")
        .then(response => response)
        .catch(error => error.response);
}

const getGroupCourses = (id) => {
    return instance.get(`groups/${id}`)
        .then(response => response)
        .catch(error => error.response);
}

const createGroup = (name) => {
    return instance.post(`groups`, {
        name: name
    })
        .then(response => response)
        .catch(error => error.response);
}

const editGroup = (id, name) => {
    return instance.put(`groups/${id}`, {
        name: name
    })
        .then(response => response)
        .catch(error => error.response);
}

const deleteGroup = (id) => {
    return instance.delete(`groups/${id}`)
        .then(response => response)
        .catch(error => error.response);
}

export const groupsAPI = {
    getGroups: getGroups,
    getGroupCourses: getGroupCourses,
    createGroup: createGroup,
    editGroup: editGroup,
    deleteGroup: deleteGroup
};