import React from 'react'
import { PostCardContainer, Heading, UserHeading, TitleHeading, PostTextContainer, PostActionContainer, VoteContainer, CommentButtonConatiner } from './styled'
import { goToPost } from '../../routes/coordinator'
import { useHistory } from "react-router-dom"
import { votePost } from '../../services/post'

import { Accordion, AccordionSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const PostCard = (props) => {
    const history = useHistory()

    const handleVote = (decision) => {
        const body = { direction: decision }

        votePost(body, props.id)
    }

    return (
        <PostCardContainer>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Heading>
                        <UserHeading>{props.username}</UserHeading>
                        <TitleHeading>{props.title}</TitleHeading>
                    </Heading>
                </AccordionSummary>
                <PostTextContainer>
                    <Typography>
                        {props.text}
                    </Typography>
                </PostTextContainer>
                <PostActionContainer>
                    <VoteContainer>
                        <ArrowUpwardIcon onClick={() => handleVote(1)} />
                        <p>{props.votesCount}</p>
                        <ArrowDownwardIcon onClick={() => handleVote(-1)} />
                    </VoteContainer>
                    <CommentButtonConatiner onClick={() => goToPost(history, props.id)}>
                        <p>{props.commentsCount} comentários</p>
                    </CommentButtonConatiner>
                </PostActionContainer>
            </Accordion>
        </PostCardContainer>
    )
}

export default PostCard;