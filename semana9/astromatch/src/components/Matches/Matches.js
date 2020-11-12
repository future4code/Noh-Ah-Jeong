import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import { Container, MatchContainer } from './styled'
import { URL_Base } from '../../constants/URLs'

function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios
            .get(`${URL_Base}/matches`)
            .then(response => setMatches(response.data.matches))
            .catch(error => console.log("Erro em chamar matches."))
    }

    console.log(matches)

    return (
        <Container>
            <Header goToProfiles={props.goToProfiles} />

            {matches.map((match) => {
                return (
                    <MatchContainer>
                        <img src={match.photo}></img>
                        <p>{match.name}</p>
                    </MatchContainer>
                )
            })}
        </Container>
    )
}

export default Matches;