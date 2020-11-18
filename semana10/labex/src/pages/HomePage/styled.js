import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-top: 5vh;
`

export const AdminButton = styled.button`
    border: 2px solid #f44336;
    border-radius: 5em;
    color: #f44336;
    background-color: white;
    padding: 1em;
`

export const FormButton = styled.button`
    border: none;
    border-radius: 5em;
    color: white;
    background-color: #008CBA;
    padding: 2em;
`