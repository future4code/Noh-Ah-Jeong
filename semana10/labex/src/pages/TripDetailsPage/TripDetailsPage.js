import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import useProtectedPage from '../../hooks/useProtectedPage';
import { BaseURL } from '../../constants/urls';
import { MainContainer, CardsContainer, CardContainer, ButtonContainer } from './styled';
import { YellowButton } from '../../components/Buttons/styled';

function TripDetailsPage() {
    useProtectedPage()

    const pathParams = useParams()
    const id = pathParams.id

    const [trip, setTrip] = useState({})
    const [candidatesList, setCandidatesList] = useState([])

    const history = useHistory()

    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = () => {
        axios
            .get(`${BaseURL}/trip/${id}`, { headers: { auth: localStorage.getItem('token') } })
            .then((response) => {
                setTrip(response.data.trip)
                setCandidatesList(response.data.trip.candidates)
            })
            .catch((error) => {
                alert("Erro ao pegar os detalhes da viagem!")
            })
    }

    const onClickGoBack = () => {
        history.goBack()
    }

    return (
        <MainContainer>
            <h1>Detalhes da viagem</h1>

            <CardsContainer>
                <CardContainer>
                    <h3>Informações da viagem</h3>
                    <p><b>Nome: </b>{trip.name}</p>
                    <p><b>Planeta: </b>{trip.planet}</p>
                    <p><b>Data: </b>{trip.date}</p>
                    <p><b>Descrição: </b>{trip.description}</p>
                    <p><b>Duração em dias: </b>{trip.durationInDays}</p>
                </CardContainer>
                <CardContainer>
                    <h3>Lista de candidatos</h3>
                    {candidatesList && candidatesList.map(candidate => {
                        return <p key={candidate.id}>{candidate.name}</p>
                    })}
                </CardContainer>
            </CardsContainer>

            <ButtonContainer>
                <YellowButton onClick={onClickGoBack}>Voltar</YellowButton>
            </ButtonContainer>
        </MainContainer>
    )
}

export default TripDetailsPage;