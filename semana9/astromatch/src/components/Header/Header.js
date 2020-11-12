import React from 'react';
import { HeaderContainer, Img } from './styled';
import Previous from '../../assets/previous-48dp.svg'
import Next from '../../assets/next-48dp.svg'

function Header(props) {
    return(
        <HeaderContainer>
            <Img src={Previous} onClick={props.goToProfiles}/>
            <h2>AstroMatch</h2>
            <Img src={Next} onClick={props.goToMatches}/>
        </HeaderContainer>
    )
}

export default Header;