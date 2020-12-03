import React from 'react'
import { MainContainer, PostContainer, FormContainer } from './styled'
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

        window.location.reload();
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
                    <div>{postDetail.username}</div>
                    <div>{postDetail.title}</div>
                    <div>{postDetail.text}</div>
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

                { commentList }

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