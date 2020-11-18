import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import { BaseURL } from '../../constants/urls';
import TripCard from '../../components/TripCard/TripCard';

function ListTripsPage() {
    useProtectedPage()
    const [tripList, setTripList] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTripList();
    }, []);

    const getTripList = () => {
        axios
            .get(`${BaseURL}/trips`)
            .then((response) => {
                setTripList(response.data.trips)
            })
            .catch((error) => {
                alert("Erro no getTripList")
            })
    }

    const TripListCard = tripList.map((trip) => {
        return(
            <TripCard
                key={trip.id}
                name={trip.name}
                date={trip.date}
                description={trip.description}
                duration={trip.durationInDays}
                planet={trip.planet}
            />
        )
    })

    const onClickLogout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return(
        <div>
            <button onClick={onClickLogout}>Logout</button>
            <p>Página lista.</p>
            {TripListCard}
        </div>
    )
}

export default ListTripsPage;