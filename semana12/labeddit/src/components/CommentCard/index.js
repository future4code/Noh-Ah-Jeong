import React from 'react'
import { CommentCardContainer } from './styled'

const CommentCard = (props) => {

    return (
        <CommentCardContainer>
            <p>{props.username}</p>

            <p>{props.text}</p>

            <p>{props.votesCount} votes</p>
        </CommentCardContainer>
    )
}

export default CommentCard;