import React from 'react';
import Header from '../Header/Header';
import { Container } from './styled'

function Matches(props) {
    return(
        <Container>
            <Header goToProfiles={props.goToProfiles}/>
            <div>matches</div>
        </Container>
    )
}

export default Matches;