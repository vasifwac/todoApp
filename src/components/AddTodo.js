import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAddTodo } from '../CustomHooks/useAddTodo'


export default function AddTodo({ submitTodo }) {

    const { addItem,onChange,item,inputError } = useAddTodo({submitTodo})

    return (
        <div>
            <Form onSubmit={addItem}>
                <Form.Group className="mb-3 input-field" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text"
                        placeholder="Enter the item"
                        value={item}
                        onChange={onChange}
                        autoComplete="off"
                        isInvalid={inputError}
                    />
                    <Form.Control.Feedback type="invalid">
                        Required field
                    </Form.Control.Feedback>
                </Form.Group>
                <Button onClick={addItem} size="sm" variant="light">Add To list</Button>
            </Form>
        </div>
    )
}
