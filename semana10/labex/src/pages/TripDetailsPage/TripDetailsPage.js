import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import useProtectedPage from '../../hooks/useProtectedPage';
import { BaseURL, axiosConfig } from '../../constants/API';
import { MainContainer, CardsContainer, CardContainer, CandidateContainer, ButtonContainer, ApproveButton, RejectButton } from './styled';
import { YellowButton } from '../../components/Buttons/styled';

function TripDetailsPage() {
    useProtectedPage()

    const pathParams = useParams()
    const tripId = pathParams.id

    const [trip, setTrip] = useState({})
    const [candidatesList, setCandidatesList] = useState([])

    const history = useHistory()

    useEffect(() => {
        getTripDetail()
    }, [candidatesList])

    const getTripDetail = () => {
        axios
            .get(`${BaseURL}/trip/${tripId}`, axiosConfig)
            .then((response) => {
                setTrip(response.data.trip)
                setCandidatesList(response.data.trip.candidates)
            })
            .catch((error) => {
                alert("Erro ao pegar os detalhes da viagem!")
            })
    }

    const decideCandidate = (candidateId, decision) => {
        const body = {
            approve: decision
        }

        axios
            .put(`${BaseURL}/trips/${tripId}/candidates/${candidateId}/decide`, body, axiosConfig)
            .then((response) => {
                alert(`Decisão: ${decision}`)
            })
            .catch((error) => {
                alert("Erro ao aprovar ou rejeitar candidato!")
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
                        return(
                            <CandidateContainer key={candidate.id}>
                                {candidate.name}
                                <ApproveButton onClick={() => decideCandidate(candidate.id, true)}>o</ApproveButton>
                                <RejectButton onClick={() => decideCandidate(candidate.id, false)}>x</RejectButton>
                            </CandidateContainer>
                        )
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