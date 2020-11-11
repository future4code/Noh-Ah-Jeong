import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 600px;
    background-color: white;
    border: 2px solid black;
    border-radius: 16px;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 428px;
    position: relative;
`

export const ProfileImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
    border-radius: 8px;
`

export const ProfileDetailContainer = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 8px;
    color: white;
    text-shadow: 1px 1px black;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 360px;
    height: 104px;
`