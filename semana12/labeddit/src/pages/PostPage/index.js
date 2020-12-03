import React from 'react'
import { MainContainer, PostContainer } from './styled'
import { useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage'
import { useRequestData } from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"

const PostPage = () => {
    useProtectPage()
    const params = useParams()
    const getPostDetail = useRequestData(`${BASE_URL}/posts/${params.id}`, undefined)
    const postDetail = getPostDetail && getPostDetail.post

    console.log(postDetail)

    return (
        <MainContainer>
            <PostContainer>
                <div>{postDetail.username}</div>
                <div>{postDetail.title}</div>
                <div>{postDetail.text}</div>
            </PostContainer>
            Teste Post
        </MainContainer>
    );
}

export default PostPage;