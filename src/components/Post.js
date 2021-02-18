import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="post__bottom">
          <p>{message}</p>
      </div>
      <div className="post__image">
          <img src={image} alt=""/>
      </div>
      <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon/>
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlinedIcon/>
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeOutlinedIcon/>
            <p>Share</p>
          </div>
          <div className="post__option">
            <AccountCircleOutlinedIcon/>
            <ExpandMoreOutlinedIcon/>
          </div>
      </div>
    </div>
  );
}

export default Post;
