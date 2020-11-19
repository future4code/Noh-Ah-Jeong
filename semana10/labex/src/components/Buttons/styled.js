import styled from 'styled-components'
import { mainBlue, darkBlue, lightBlue, mainYellow, darkYellow, lightYellow } from '../../constants/colors'

export const YellowButton = styled.button`
    border: 2px solid ${mainYellow};
    border-radius: 5em;
    background-color: ${lightYellow};
    padding: 1em;
    cursor: pointer;
    outline: none;
    :active {
        transform: translateY(4px)
    }
    :hover {
        border: 2px solid ${darkYellow};
        background-color: ${mainYellow};
    }
`

export const BlueButton = styled.button`
    border: 2px solid ${mainBlue};
    border-radius: 5em;
    background-color: ${lightBlue};
    padding: 1em;
    cursor: pointer;
    outline: none;
    :active {
        transform: translateY(4px)
    }
    :hover {
        border: 2px solid ${darkBlue};
        background-color: ${mainBlue};
    }
`