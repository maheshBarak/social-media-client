import axios from "axios";
import {
    KEY_ACCESS_TOKEN,
    getItem,
    removeItem,
    setItem,
} from "./localStorageManager";

export const axiosClient = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
});

// REQUEST INTERCEPTOR
axiosClient.interceptors.request.use((request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    //access token request k andar header me send krna h
    request.headers["Authorization"] = `Bearer ${accessToken}`;

    return request;
});

// RESPONSE INTERCEPTOR
axiosClient.interceptors.response.use(async (response) => {
    const data = response.data;
    if (data.status === "ok") {
        //  return response;
        return data;
    }

    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const error = data.error;

    /*   // when refresh token expires, send user to login page
    if (
        statusCode === 401 &&
        originalRequest.url === "http://localhost:4000/auth/refresh"
    ) {
        removeItem(KEY_ACCESS_TOKEN);
        window.location.replace("/login", "_self"); // browser ka tarika
        return Promise.reject(error);
    } */

    // access token is expired, refresh request
    if (statusCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const response = await axios
            .create({
                withCredentials: true,
            })
            .get("http://localhost:4000/auth/refresh");

        if (response.status === "ok") {
            setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
            originalRequest.headers[
                "Authorization"
            ] = `Bearer ${response.result.accessToken}`;

            return axios(originalRequest);
        } else {
            // refresh token expires, therefore user logouts
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace("/login", "_self"); // browser ka tarika
            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
});
