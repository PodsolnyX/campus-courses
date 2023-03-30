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

export const groupsAPI = {
    getGroups: getGroups
};