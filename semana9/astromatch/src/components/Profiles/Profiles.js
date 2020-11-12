import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import { Container, ProfileContainer, ButtonContainer, Img } from './styled'
import { URL_Base } from '../../constants/URLs'
import ConfirmSVG from '../../assets/confirm-48dp.svg'
import CancelSVG from '../../assets/cancel-48dp.svg'

function Profiles(props) {
    const [profile, setProfile] = useState("")

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios
            .get(`${URL_Base}/person`)
            .then(response => setProfile(response.data.profile))
            .catch(error => console.log("Erro em chamar profile."))
    };

    const doMatch = () => {
        const body = {
            id: profile.id,
	        choice: true
        }
        axios
            .post(`${URL_Base}/choose-person`, body)
            .then(response =>
                console.log("Deu match."),
                getProfile()
            )
            .catch(error => console.log("Erro ao dar match."))
    }

    const doNotMatch = () => {
        const body = {
            id: profile.id,
	        choice: false
        }
        axios
            .post(`${URL_Base}/choose-person`, body)
            .then(response =>
                console.log("Não deu match."),
                getProfile()
            )
            .catch(error => console.log("Erro ao não dar match."))
    }

    return (
        <Container>
            <Header goToMatches={props.goToMatches} />

            <ProfileContainer imageUrl={profile.photo}>
                <h3>{profile.name}, {profile.age}</h3>
                <h4>{profile.bio}</h4>
            </ProfileContainer>
            <ButtonContainer>
                <Img src={CancelSVG} onClick={doNotMatch}/>
                <Img src={ConfirmSVG} onClick={doMatch}/>
            </ButtonContainer>
        </Container>
    )
}

export default Profiles;