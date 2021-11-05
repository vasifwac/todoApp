import React from 'react'
import './todoApp.css'
import Title from './Title'
import LIstItems from './LIstItems'
import AddTodo from './AddTodo'
import { useHome } from '../CustomHooks/useHome'

export default function Home() {
    const { inputItems, submitTodo, handleDelete } = useHome()

    return (
        <div className="container">
            <div className="input-section">
                <Title />
                <AddTodo submitTodo={submitTodo} />
            </div>
            <div className="list-item-section">
                <LIstItems inputItems={inputItems} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

