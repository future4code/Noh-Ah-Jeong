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
    justify-content: flex-end;
    width: 87%;
    height: 80%;
    background: url(${(props) => props.imageUrl}) center center/cover;
    border-radius: 16px;
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

export const Img = styled.img`
    :hover{
        transform: scale(1.1);
        cursor:pointer;
    }
`