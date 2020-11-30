import React from 'react';
import { useHistory } from 'react-router-dom';
import { MainContainer, ButtonContainer } from './styled';
import { BlueButton, YellowButton } from '../../components/Buttons/styled';

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
                <YellowButton onClick={goToLoginPage}>
                    Área do Administrador
                </YellowButton>

                <BlueButton onClick={goToApplicationFormPage}>
                    Quero me candidatar!
                </BlueButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default HomePage;