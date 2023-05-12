import axios from "axios";
import {clearUserProfile} from "../store/reducers/userReducer";

export const instance = axios.create({
    baseURL: "https://camp-courses.api.kreosoft.space/",
    headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
});

instance.interceptors.response.use(response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            clearUserProfile();
            window.location.pathname = "/login";
        }
        return Promise.reject(error);
    });