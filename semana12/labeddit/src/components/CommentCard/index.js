import React from 'react'
import { CommentCardContainer, CommentTextContainer } from './styled'

const CommentCard = (props) => {

    return (
        <CommentCardContainer>
            <p>{props.username}</p>
            <CommentTextContainer>
                <p>{props.text}</p>
            </CommentTextContainer>

            <p>{props.votesCount} votes</p>
        </CommentCardContainer>
    )
}

export default CommentCard;