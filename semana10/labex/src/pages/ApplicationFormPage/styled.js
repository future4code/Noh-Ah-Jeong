import styled from 'styled-components'
import { mainBlue, darkBlue } from '../../constants/colors'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    border: 2px solid ${darkBlue};
    border-radius: 24px;
    padding: 40px;
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

export const Select = styled.select`
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
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding-top: 40px;
`