export const getToken = () => {
    const token = localStorage.getItem('email') ? localStorage.getItem('email') : null
    return token
}