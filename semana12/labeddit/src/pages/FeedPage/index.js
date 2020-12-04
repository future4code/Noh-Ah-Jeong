import React from 'react'
import { MainContainer, FormContainer } from './styled'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { BASE_URL } from "../../constants/url"
import PostCard from '../../components/PostCard'
import { createPost } from '../../services/post'
import { CircularProgress, TextField, Button } from '@material-ui/core'

const FeedPage = () => {
    useProtectPage()

    const getPosts = useRequestData(`${BASE_URL}/posts`, undefined)
    const postsList = getPosts && getPosts.posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                text={post.text}
                username={post.username}
                votesCount={post.votesCount}
                commentsCount={post.commentsCount}
            />
        )
    })

    const { form, onChangeInput } = useForm({
        text: "",
        title: "",
    })
    const onSubmit = (event) => {
        event.preventDefault()

        createPost(form)

        window.location.reload()
    }

    if (getPosts) {
        return (
            <MainContainer>
                <FormContainer onSubmit={onSubmit}>
                    <TextField
                        label="Título do Post"
                        variant="outlined"
                        name="title"
                        value={form.title}
                        onChange={onChangeInput}
                    />
                    <TextField
                        label="Texto do Post"
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
                        Criar Post
                    </Button>
                </FormContainer>
                {postsList}
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

export default FeedPage;