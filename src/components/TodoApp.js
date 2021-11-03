import React, { useState } from 'react'
import './todoApp.css'
import { Form, Button } from 'react-bootstrap'
import Title from './Title'
import LIstItems from './LIstItems'

export default function TodoApp() {

    const [item, setItem] = useState('')
    const [inputItems, setInputItems] = useState([])
    let isFormValid = true;

    const addItem = (e) => {

        e.preventDefault();

        if (item !== "") {
            setInputItems([
                ...inputItems,
                item
            ])
            setItem('')
        }
        else {
            alert("please fill the below item")
        }
    }


    const handleDelete = (item) => {

        setInputItems(inputItems.filter((todo) => {
            return todo != item
        }))
    }


    return (
        <div className="container">

            <div className="input-section">
                <Title />

                <Form onSubmit={addItem}>
                    <Form.Group className="mb-3 input-field" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text"
                            placeholder="Enter the item"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            autoComplete="off"
                        />
                        {!isFormValid && (<p className="validation">please fill this filed..!</p>)}
                    </Form.Group>
                    <Button onClick={addItem} size="sm" variant="light">Add To list</Button>
                </Form>

            </div>

            <div className="list-item-section">

                <LIstItems inputItems={inputItems} handleDelete={handleDelete} />

            </div>
        </div>
    )
}

