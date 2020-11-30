import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { BaseURL } from '../../constants/API'
import { MainContainer, InputContainer, Input, ButtonContainer } from "./styled";
import { BlueButton, YellowButton } from "../../components/Buttons/styled";

function LoginPage() {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push('/trips/list')
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

    return (
        <MainContainer>
            <h1>Login</h1>
            <InputContainer>
                <Input type='email' placeholder='Usuário' value={emailInput} onChange={onChangeEmailInput} />
                <Input type='password' placeholder='Senha' value={passwordInput} onChange={onChangePasswordInput} />
            </InputContainer>
            <ButtonContainer>
                <YellowButton onClick={onClickGoBack}>Voltar</YellowButton>
                <BlueButton onClick={onClickLogin}>Entrar</BlueButton>
            </ButtonContainer>
        </MainContainer>
    )
}

export default LoginPage;