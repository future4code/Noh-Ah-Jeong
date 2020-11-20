import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { MainContainer, Form, Input, Select, ButtonContainer } from "./styled";
import { BlueButton, YellowButton } from '../../components/Buttons/styled'
import axios from "axios";
import { BaseURL, axiosConfig } from '../../constants/API';

function CreateTripPage() {
    useProtectedPage()

    const { form, onChange, resetState } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target

        onChange(name, value)
    }

    const handleSubmittion = (event) => {
        event.preventDefault()

        createTrip()

        resetState()
    }

    const createTrip = () => {
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.durationInDays
        }

        axios
            .post(`${BaseURL}/trips`, body, axiosConfig)
            .then((response) => {
                alert("Viagem criada!")
            })
            .catch((error) => {
                alert("Erro na criação!")
            })
    }

    const history = useHistory()

    const onClickGoBack = () => {
        history.goBack()
    }

    return (
        <MainContainer>
            <h1>Criar uma viagem</h1>

            <Form onSubmit={handleSubmittion}>
                <Input
                    value={form.name}
                    name="name"
                    onChange={handleInputChange}
                    type='text'
                    pattern='[A-z0-9À-ž\s]{5,}'
                    title="No mínimo 5 letras"
                    placeholder="Nome da viagem"
                    required
                />
                <Select
                    value={form.planet}
                    name="planet"
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled selected>Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                </Select>
                <Input
                    value={form.date}
                    name="date"
                    onChange={handleInputChange}
                    type='date'
                    min="2020-11-20"
                    title="Deve ser uma data futura"
                    required
                />
                <Input
                    value={form.description}
                    name="description"
                    onChange={handleInputChange}
                    type='text'
                    pattern='[A-z0-9À-ž\s]{30,}'
                    title="No mínimo 30 letras"
                    placeholder="Descrição da viagem"
                    required
                />
                <Input
                    value={form.durationInDays}
                    name="durationInDays"
                    onChange={handleInputChange}
                    type='number'
                    min="50"
                    title="No mínimo 50 dias"
                    placeholder="Duração da viagem em dias"
                    required
                />
                <BlueButton>Criar</BlueButton>
            </Form>

            <ButtonContainer>
                <YellowButton onClick={onClickGoBack}>Voltar</YellowButton>
            </ButtonContainer>
        </MainContainer>
    )
}

export default CreateTripPage;