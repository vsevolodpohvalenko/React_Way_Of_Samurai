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
        debugger
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
    },
    SaveProfile : (profile) => {
        debugger
      return Instance.put("profile", profile)
    },


    SavePhoto : (photos) => {
        let formData = new FormData()
        formData.append("image", photos)
        return Instance.put("profile/photo", formData)
    }
}
export const AuthAPI = {
    Auth : () => {
        return Instance.get(`auth/me`)},
    login : (email, password, rememberMe= false, captcha = null ) => {
        return Instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },

    logout : () => {
        return Instance.delete(`auth/login`)
    }
}
export const  SecurityAPI = {
    getCaptcha() {
        return Instance.get("security/get-captcha-url")
    }
}