import styled from 'styled-components'
import { mainBlue, darkBlue, lightBlue, mainYellow, darkYellow, lightYellow } from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid white;
    border-radius: 8px;
    background-color: ${lightBlue};
    width: 400px;
    height: 40px;
    padding: 0px 16px;
    cursor: pointer;
    :hover {
        background-color: ${mainBlue};
    }
`