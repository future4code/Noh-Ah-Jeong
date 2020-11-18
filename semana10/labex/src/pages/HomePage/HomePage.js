import React from "react";
import { useHistory } from "react-router-dom";
import { MainContainer, ButtonContainer, AdminButton, FormButton } from "./styled";

function HomePage() {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push('/login')
    }

    const goToApplicationFormPage = () => {
        history.push('/application-form')
    }

    return (
        <MainContainer>
            <h1>Bem Vind@ ao LabeX!</h1>
            <ButtonContainer>
                <AdminButton onClick={goToLoginPage}>
                    Área do Administrador
                </AdminButton>

                <FormButton onClick={goToApplicationFormPage}>
                    <h1>Quero me candidatar!</h1>
                </FormButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default HomePage;