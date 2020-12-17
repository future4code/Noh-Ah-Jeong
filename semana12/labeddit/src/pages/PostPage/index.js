import React from 'react'
import { MainContainer, PostContainer, Heading, UserHeading, TitleHeading, PostTextContainer, FormContainer } from './styled'
import { useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { BASE_URL } from '../../constants/url'
import CommentCard from '../../components/CommentCard'
import { createComment } from '../../services/post'
import { CircularProgress, TextField, Button } from '@material-ui/core'

const PostPage = () => {
    useProtectPage()
    const params = useParams()
    const getPostDetail = useRequestData(`${BASE_URL}/posts/${params.id}`, undefined)
    const postDetail = getPostDetail && getPostDetail.post

    const { form, onChangeInput } = useForm({
        text: "",
    })
    const onSubmit = (event) => {
        event.preventDefault()

        createComment(form, params)
    }

    const commentList = postDetail && postDetail.comments.map((comment) => {
        return (
            <CommentCard
                key={comment.id}
                id={comment.id}
                text={comment.text}
                username={comment.username}
                votesCount={comment.votesCount}
            />
        )
    })

    if (postDetail) {
        return (
            <MainContainer>
                <PostContainer>
                    <Heading>
                        <UserHeading>{postDetail.username}</UserHeading>
                        <TitleHeading>{postDetail.title}</TitleHeading>
                    </Heading>
                    <PostTextContainer>
                        {postDetail.text}
                    </PostTextContainer>
                </PostContainer>

                <FormContainer onSubmit={onSubmit}>
                    <TextField
                        label="Comentário"
                        variant="outlined"
                        name="text"
                        value={form.text}
                        onChange={onChangeInput}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Comentar
                </Button>
                </FormContainer>

                {commentList}

            </MainContainer>
        )
    } else {
        return (
            <MainContainer>
                <CircularProgress />
            </MainContainer>
        )
    }
}

export default PostPage;