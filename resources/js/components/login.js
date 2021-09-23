import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {Container, Alert} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Route,Switch,Link, NavLink,BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

function Login() {
    const [showErr, setShowErr] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        axios
            .get("api/login", {
                params: {
                    email: data.email,
                },
            })
            .then((response) => {
                if (data.password == response.data[0].password) {
                    location.href = "/EditPost";
                } else {
                    setShowErr(true);
                }
            })
            .catch((error) => {
                setShowErr(true);
            });
    };

    return (
        <div>
        <Alert
                show={showErr}
                variant="danger"
                onClose={() => setShowErr(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>
                        Datos incorrectos.
                    </Alert.Heading>
                    <p>
                        Vuelve a intentarlo.
                    </p>
                </center>
        </Alert>

        <Container fluid>
            <h1 className="mt-5">Iniciar sesión</h1>
            <Row xl={1} className=" m-5 " >
                <Form>
                        <Form.Group controlId="">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control type="text" name="email" placeholder="" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" name="password" placeholder="" onChange={handleInputChange}/>
                        </Form.Group>

                    <Button variant="primary" onClick={handleLogin}>
                        Iniciar sesión
                    </Button>
            
                    
                    
                </Form>
            </Row>
        </Container>
        </div>
    );
}

export default Login;
