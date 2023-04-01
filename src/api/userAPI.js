import {toastError} from "../helpers/toaster";
import {instance} from "./instance";

const registerUser = (userData) => {
    return instance.post("registration", {
        fullName: userData.name,
        birthDate: userData.birthDate,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.passwordConfirmation
    })
        .then(response => {
            if (response.status === 200) {
                instance.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
                return response.data;
            }

        })
        .catch(error => {
            if (error.response.status === 409)
                toastError("Аккаунт с данным email-адресом уже существует")
            else
                toastError("Неверный формат данных")
        });
}

const loginUser = (userData) => {
    return instance.post("login", {
        email: userData.email,
        password: userData.password
    })
        .then(response => {
            if (response.status === 200) {
                instance.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
                return response.data;
            }
        })
        .catch(error => {
            toastError("Неверный логин или пароль")
        });
}

const getProfile = () => {
    return instance.get("profile")
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const getRoles = () => {
    return instance.get("roles")
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const getUsers = () => {
    return instance.get("users")
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const logoutUser = () => {
    return instance.post("logout")
        .then(response => {
            if (response.status === 200) {
                instance.defaults.headers["Authorization"] = `Bearer`;
                return response.data;
            }
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

const editUserProfile = (userData) => {
    return instance.put("profile", {
        fullName: userData.fullName.trimEnd(),
        birthDate: userData.birthDate
    })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            toastError("Что-то пошло не так")
        });
}

export const userAPI = {
    registerUser: registerUser,
    loginUser: loginUser,
    getProfile: getProfile,
    getRoles: getRoles,
    logoutUser: logoutUser,
    editUserProfile: editUserProfile,
    getUsers: getUsers
};

