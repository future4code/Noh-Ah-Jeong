import styled from 'styled-components'
import { mainBlue, darkBlue } from '../../constants/colors'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid ${mainBlue};
    padding: 8px 0;
    margin: 8px 0;
    outline: none;
    :hover {
        border-bottom: 2px solid ${darkBlue}
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
`