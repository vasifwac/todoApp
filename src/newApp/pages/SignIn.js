import React from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBarHead from '../components/NavBarHead'
import { login } from '../services'
import useSignIn from './hooks/useSignIn'


export default function SignIn() {

    const [handleChange, handleSubmit, inputError] = useSignIn({ login })

    return (
        <>
            <NavBarHead />
            <Row style={{ height: '80vh' }}>
                <Col></Col>
                <Col className="p-3 mt-5" md={4}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="d-flex justify-content-center" >Log In</h2>
                        <Form.Group className="mb-3" controlId="username" >

                            <Form.Control type="text" isInvalid={inputError} onChange={(e) => handleChange(e)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                use "admin" as username
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Required field
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password"  >

                            <Form.Control type="password" isInvalid={inputError} onChange={(e) => handleChange(e)} placeholder="Password" />
                            <Form.Text className="text-muted">
                                use "password" as password
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Required field
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <Footer />
        </>

    )
}
