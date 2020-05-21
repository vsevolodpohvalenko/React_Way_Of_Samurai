import  * as  axios from 'axios'

const Instance =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "57fbd423-ede9-4630-8c9e-c7be38ecfbde"}

});
export const usersAPI =  {
    getUsers : (currentPage, pageSize ) => {

        return Instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            debugger
            return response.data})

    },
    follow : (id) => {
        return Instance.post(`follow/${id}`)
    },
    unfollow : (id) => {
        return Instance.delete(`follow/${id}`)
    },
}
export const profileAPI = {
    getProfile : (id) => {
        return Instance.get(`profile/${id}`).then(response => {return response.data})},
    getStatus : (id) =>{
        return Instance.get(`profile/status/${id}`)},
    updateStatus :(status) =>{
       return Instance.put(`profile/status`, {status: status})
    }
}
export const AuthAPI = {
    Auth : () => {
        return Instance.get(`auth/me`).then(response => {return response.data})},
    login : (email, password, rememberMe= false ) => {
        return Instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout : () => {
        return Instance.delete(`auth/login`)
    }
}