import Credintials from '../constants/credintials.json'

export const isLogin = () => {
    if (localStorage.getItem('access')) {
        return true
    }
    return false
}

// export const logout = () => {
//     localStorage.removeItem('access')
//     return true
// }

export const login = (data) => {
    if (data.username === Credintials.username) {
        if (data.password === Credintials.password) {
            localStorage.setItem('access', true)
            return 'success'
        }
        else {
            return 'failed'
        }
    }
    else {
        return 'failed'
    }
}