import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/story.css'

function Story({ image, profileSrc, title}) {
    const divStile = {
        backgroundImage: 'url(' + image + ')',
      };
    return (
        <div style={divStile} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story;
