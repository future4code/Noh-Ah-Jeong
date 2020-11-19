import styled from 'styled-components'
import { darkBlue } from '../../constants/colors'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    border: 2px solid ${darkBlue};
    border-radius: 24px;
    padding: 32px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding-top: 40px;
`