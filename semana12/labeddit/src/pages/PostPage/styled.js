import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    border: 1px solid black;
    margin: auto;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 448px;
    height: 20vh;
    border: 1px solid black;
    border-radius: 5px;
    margin: 8px 0;
    padding: 0 16px;
`

export const Heading = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const UserHeading = styled.p`
    flex-basis: 20%;
`

export const TitleHeading = styled.p`
    flex-basis: 70%;
    margin-left: 16px;
`

export const PostTextContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 16px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 480px;
    height: 160px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 20px;
    padding: 8px 0;
`