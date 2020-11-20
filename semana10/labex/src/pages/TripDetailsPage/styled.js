import styled from 'styled-components'
import { darkBlue, mainBlue, darkYellow, mainYellow } from '../../constants/colors'

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

export const CandidateContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding-top: 40px;
`

export const ApproveButton = styled.button`
    border: 2px solid ${darkBlue};
    border-radius: 10%;
    background-color: ${mainBlue};
    padding: 0.5em;
    margin: 0 16px;
    cursor: pointer;
    outline: none;
    :active {
        transform: translateY(4px)
    }
    :hover {
        background-color: ${darkBlue};
    }
`

export const RejectButton = styled.button`
    border: 2px solid ${darkYellow};
    border-radius: 10%;
    background-color: ${mainYellow};
    padding: 0.5em;
    cursor: pointer;
    outline: none;
    :active {
        transform: translateY(4px)
    }
    :hover {
        background-color: ${darkYellow};
    }
`