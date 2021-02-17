import React from 'react';
import '../styles/feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>
        </div>
    )
}

export default Feed;
