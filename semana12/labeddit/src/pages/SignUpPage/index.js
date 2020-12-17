import React from 'react'
import { MainContainer, FormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import { signup } from '../../services/user'
import { TextField, Button } from '@material-ui/core';

const SignUpPage = () => {
    useUnprotectPage()

    const history = useHistory()

    const { form, onChangeInput } = useForm({
        username: "",
        email: "",
        password: "",
    })

    const onSubmit = (event) => {
        event.preventDefault()
        signup(form, history)
    }

    return (
        <MainContainer>
            <FormContainer onSubmit={onSubmit}>
                <TextField
                    label="Nome"
                    variant="outlined"
                    name="username"
                    value={form.username}
                    onChange={onChangeInput}
                />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChangeInput}
                />
                <TextField  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeInput}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Cadastrar
                </Button>
            </FormContainer>
        </MainContainer>
    );
}

export default SignUpPage;