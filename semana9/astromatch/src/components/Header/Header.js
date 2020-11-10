import React from 'react';
import { HeaderContainer } from './styled';

function Header(props) {
    return(
        <HeaderContainer>
            <button onClick={props.goToProfiles}>-</button>
            <p>AstroMatch</p>
            <button onClick={props.goToMatches}>+</button>
        </HeaderContainer>
    )
}

export default Header;