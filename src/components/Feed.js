import React from 'react';
import '../styles/feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>
            <Post
             profilePic='https://images.unsplash.com/photo-1572984446774-a6109be33e8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
             message="Hello!"
             timestamp="timestamp"
             username="Coty"
             image="https://images.unsplash.com/photo-1516942409-42fe0e631e55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1652&q=80"
            />
            <Post
             profilePic='https://images.unsplash.com/photo-1572984446774-a6109be33e8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
             message="Amazing!"
             timestamp="timestamp"
             username="Coty"
            />
        </div>
    )
}

export default Feed;
