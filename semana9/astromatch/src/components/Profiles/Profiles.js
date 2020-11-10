import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import { Container, ProfileContainer, ButtonContainer } from './styled'

function Profiles(props) {
    const [profile, setProfile] = useState("profiles")

    useEffect(() => {
        getProfile()
        console.log(profile)
        console.log(profile)
    }, [])

    const getProfile = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nohah/person")
            .then(response => setProfile(response))
            .catch(error => console.log("erro no profile"))
    };

    return (
        <Container>
            <Header goToMatches={props.goToMatches} />
            <ProfileContainer>
                <p>nome, idade</p>
                <p>descrição</p>
            </ProfileContainer>
            <ButtonContainer><button>&</button></ButtonContainer>
        </Container>
    )
}

export default Profiles;