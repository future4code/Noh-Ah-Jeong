import React from 'react'
import { CommentCardContainer, CommentTextContainer, VoteContainer } from './styled'
import { useParams } from 'react-router-dom';
import { voteComment } from '../../services/post'
import { IconButton } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const CommentCard = (props) => {
    
    const params = useParams()

    const handleVote = (decision) => {
        const body = { direction: decision }

        voteComment(body, params.id, props.id)
    }

    console.log(props)
    console.log(params, "params")

    return (
        <CommentCardContainer>
            <p>{props.username}</p>
            <CommentTextContainer>
                <p>{props.text}</p>
            </CommentTextContainer>

            <VoteContainer>
                <IconButton>
                    <ArrowUpwardIcon onClick={() => handleVote(1)} />
                </IconButton>
                <p>{props.votesCount}</p>
                <IconButton>
                    <ArrowDownwardIcon onClick={() => handleVote(-1)} />
                </IconButton>
            </VoteContainer>
        </CommentCardContainer>
    )
}

export default CommentCard;