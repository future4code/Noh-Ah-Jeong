import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
    border-bottom: 2px solid gainsboro;
    margin-bottom: 16px;
`

export const Img = styled.img`
    :hover{
        transform: scale(1.1);
        cursor:pointer;
    }
`