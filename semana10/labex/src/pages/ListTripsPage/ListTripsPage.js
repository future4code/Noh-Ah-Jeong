import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import { BaseURL } from '../../constants/urls';
import TripCard from '../../components/TripCard/TripCard';
import { MainContainer, TripListCardContainer, ButtonContainer } from './styled';
import { YellowButton } from '../../components/Buttons/styled';

function ListTripsPage() {
    useProtectedPage()

    const [tripList, setTripList] = useState([])
    
    const history = useHistory()

    useEffect(() => {
        getTripList()
    }, [])

    const getTripList = () => {
        axios
            .get(`${BaseURL}/trips`)
            .then((response) => {
                setTripList(response.data.trips)
            })
            .catch((error) => {
                alert("Erro ao pegar lista de viagens!")
            })
    }

    const TripListCard = tripList.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                name={trip.name}
                date={trip.date}
                description={trip.description}
                duration={trip.durationInDays}
                planet={trip.planet}
                onClick={() => goToTripDetailsPage(trip.id)}
            />
        )
    })

    const goToTripDetailsPage = (id) => {
        history.push(`/trips/details/${id}`)
    }

    const onClickLogout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <MainContainer>
            <h1>Lista de Viagens</h1>
            
            <TripListCardContainer>
                {TripListCard}
            </TripListCardContainer>

            <ButtonContainer>
                <YellowButton onClick={onClickLogout}>Logout</YellowButton>
            </ButtonContainer>
        </MainContainer>
    )
}

export default ListTripsPage;