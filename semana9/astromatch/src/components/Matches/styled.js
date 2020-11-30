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

export const MatchContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    :hover{
        background-color: gainsboro;
    }
        img {
            object-fit: cover;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            padding: 2px;
            margin: 4px 16px 4px 4px;
        }
`