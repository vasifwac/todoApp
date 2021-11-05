import { useState } from 'react'


export const useAddTodo = ({submitTodo}) => {
    const [item, setItem] = useState('')
    const [inputError, setInputError] = useState(false)

    const onChange = (e) => {
        setItem(e.target.value)
    }
    
    const addItem = (e) => {
        e.preventDefault();
        if (item) {
            submitTodo(item)
            if (inputError) setInputError(false)
            setItem('')
        }
        else {
            setInputError(true)
        }
    }

    return {
        item,inputError,onChange,addItem
    }
}