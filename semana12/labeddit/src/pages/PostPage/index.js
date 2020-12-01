import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage'

const PostPage = () => {
    useProtectPage()
    
    return (
        <div>
            Teste Post
        </div>
    );
}

export default PostPage;