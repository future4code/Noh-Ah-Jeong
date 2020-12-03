import React from 'react'
import { PostCardContainer, Heading, UserHeading, TitleHeading, ClickableDiv } from './styled'
import { goToPost } from '../../routes/coordinator'
import { useHistory } from "react-router-dom";

import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const PostCard = (props) => {
    const history = useHistory()

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
                <AccordionDetails onClick={() => goToPost(history, props.id)}>
                    <ClickableDiv>
                        <Typography>
                            {props.text}
                        </Typography>
                    </ClickableDiv>
                </AccordionDetails>
                <AccordionActions>
                    {props.votesCount} votes {props.commentsCount} comentários
                </AccordionActions>
            </Accordion>
        </PostCardContainer>
    )
}

export default PostCard;