import React from 'react'

const PostCard = ({post}) => {
    return (
        <div className='text-black'>
            {post.title}
            <br></br><br></br>
            {post.excerpt}
        </div>
      )
    
}

export default PostCard