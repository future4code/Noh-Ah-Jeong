import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { BaseURL } from '../../constants/urls'

function LoginPage() {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          history.push('/trips/list');
        }
    }, [history])

    const onChangeEmailInput = (event) => {
        setEmailInput(event.target.value)
    }

    const onChangePasswordInput = (event) => {
        setPasswordInput(event.target.value)
    }

    const onClickLogin = () => {
        const body = {
            email: emailInput,
            password: passwordInput
        }

        axios
            .post(`${BaseURL}/login`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                history.push('/trips/list')
            })
            .catch((error) => {
                alert("Usuário e/ou senha errado!")
            })
    }

    const onClickGoBack = () => {
        history.goBack()
    }

    return(
        <div>
            <p>Login</p>
            <input value={emailInput} onChange={onChangeEmailInput} />
            <input value={passwordInput} type='password' onChange={onChangePasswordInput} />
            <button onClick={onClickLogin}>Entrar</button>
            <button onClick={onClickGoBack}>Voltar</button>
        </div>
    )
}

export default LoginPage;