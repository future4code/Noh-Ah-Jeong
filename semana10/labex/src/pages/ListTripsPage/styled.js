import styled from 'styled-components'
import { darkBlue } from '../../constants/colors'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const TripListCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    border: 2px solid ${darkBlue};
    border-radius: 24px;
    padding: 40px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding-top: 40px;
`