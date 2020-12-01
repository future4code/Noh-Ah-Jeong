import React from 'react'
import { MainContainer } from './styled'
import { useProtectPage } from '../../hooks/useProtectPage' 

const FeedPage = () => {
    useProtectPage()

    return (
        <MainContainer>
            <div>
                <div>Escreva seu post</div>
                <button>postar</button>
            </div>
            <div>
                <div>nome de usuário</div>
                <div>texto do post</div>
                <div>0 votes 0 comentarios</div>
            </div>
        </MainContainer>
    );
}

export default FeedPage;