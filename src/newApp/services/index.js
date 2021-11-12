import Credintials from '../constants/credintials.json'

export const isLogin = () => {
    let res = localStorage.getItem('access')
    if (res) {
        return true
    }
    return false
}

export const logout = () => {
    localStorage.removeItem('access')
    return true
}

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