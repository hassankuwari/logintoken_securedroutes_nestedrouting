import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import CustomProfile from './CustomProfile';


const CustomLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [cookies, setCookies] = useCookies(['accessToken'])

    const navigate =useNavigate();

    const handleEmailChanged = (inputEmail) => {
        console.log("email changed", inputEmail);
        setEmail(inputEmail);
    }

    const handlePasswordChanged = (inputPass) => {
        console.log("pass changed", inputPass);
        setPassword(inputPass);
    }

    const handleLogin = () => {
        console.log("submitted");
        const inputData = {
            username: email,
            password: password,
        }
        axios.post(`https://dummyjson.com/auth/login`, inputData).then((response) => {
            console.log("response of post api", response);
            setCookies('accessToken', response.data.token, { path: '/', maxAge: 2000000 });
            // navigate('/customprofile');
            // navigate('/customdashboard');
            navigate('/pagelayout');
        })
    }


    return (
        <div className="main-container">
            <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailChanged(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter password" onChange={(e) => handlePasswordChanged(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin} >
                    Submit
                </Button>
            
            </Form>
        </div>
    )
}

export default CustomLogin
