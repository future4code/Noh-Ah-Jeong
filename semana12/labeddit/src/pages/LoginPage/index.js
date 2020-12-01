import React from 'react'
import { MainContainer, FormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useUnprotectPage } from '../../hooks/useUnprotectPage'
import { login } from '../../services/user'
import { TextField, Button } from '@material-ui/core'

// Dados para logar:
// email: noh@gmail.com
// senha: 123

const LoginPage = () => {
    useUnprotectPage()

    const history = useHistory()

    const { form, onChangeInput } = useForm({
        email: "",
        password: "",
    })

    const onSubmit = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return (
        <MainContainer>
            <FormContainer onSubmit={onSubmit}>
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
                    Entrar
                </Button>
            </FormContainer>
            <Button
                variant='contained'
                color='primary'
                href='/signup'
            >
                Cadastrar
            </Button>
        </MainContainer>
    );
}

export default LoginPage;