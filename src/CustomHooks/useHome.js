import { useState } from 'react'

export const useHome = () => {
    const [inputItems, setInputItems] = useState([])

    const submitTodo = (item) => {
        let temp = [...inputItems, item]
        setInputItems(temp)
    }

    const handleDelete = (item) => {
        setInputItems(inputItems.filter((todo) => {
            return todo !== item
        }))
    }

    return {
        inputItems,
        submitTodo,
        handleDelete
    }

}