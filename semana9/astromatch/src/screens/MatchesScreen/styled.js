import styled from 'styled-components';
import { mainYellow } from '../../constants/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 600px;
    background-color: ${ mainYellow };
    border: 2px solid black;
    border-radius: 16px;
`;