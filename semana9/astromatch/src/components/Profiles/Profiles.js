import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import { Container, ProfileContainer, ProfileImage, ProfileDetailContainer, ButtonContainer } from './styled'

function Profiles(props) {
    const [profile, setProfile] = useState("")

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nohah/person")
            .then(response => setProfile(response.data.profile))
            .catch(error => console.log("erro no profile"))
    };

    console.log(profile)

    return (
        <Container>
            <Header goToMatches={props.goToMatches} />
            <ProfileContainer>
                <ProfileImage src={profile.photo} />
                <ProfileDetailContainer>
                    <h2>{profile.name}, {profile.age}</h2>
                    <h4>{profile.bio}</h4>
                </ProfileDetailContainer>
            </ProfileContainer>
            <ButtonContainer><button>&</button></ButtonContainer>
        </Container>
    )
}

export default Profiles;