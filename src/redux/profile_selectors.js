export const getProfileS = (state) => {
    return state.ProfilePage.profile
}

export const getStatusS = (state) => {
    return state.ProfilePage.status
}
export const getMyIdS = (state) => {
    return state.auth.userId
}
export const getIsAuthS = (state) => {
    return state.auth.isAuth
}