import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services';


export default function useSignIn() {

    const [credintials, setCredintials] = useState({
        username: '',
        password: ''
    })
    const [inputError, setInputError] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredintials({
            ...credintials,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credintials.username !== '' && credintials.password !== '') {
            let data = {
                username: credintials.username,
                password: credintials.password
            }
            let res = login(data)
            if (res === 'success') {
                if (inputError) setInputError(false)
                navigate('/pageOne')
            }
            else {
                setInputError(true)
            }
        }
        else {
            setInputError(true)
        }
    }

    return [handleChange, handleSubmit, inputError]

}
