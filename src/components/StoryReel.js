import React from 'react';
import '../styles/storyReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image = "https://images.unsplash.com/photo-1609244283184-96db6d696573?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2097&q=80"
            profileSrc = "https://avatars.githubusercontent.com/u/71493279?s=60&v=4"
            title = "Coty"
            />
            <Story
            image = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
            profileSrc = "https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
            title = "Sanga"
            />
             <Story
            image = "https://images.unsplash.com/photo-1611153531261-6c3601e9b921?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            profileSrc = "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
            title = "Frenkie"
            />
            <Story
            image = "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            profileSrc = "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
            title = "Paul"
            />
            <Story
            image = "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            profileSrc = "https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
            title = "Alex"
            />
           
        </div>
    )
}

export default StoryReel;
