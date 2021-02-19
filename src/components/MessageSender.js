import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/messageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../Providers/StateProvider";
import firebase from 'firebase';
import db from '../service/firebaseAuth';

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      // message: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       profilepPic: user.photoURL,
       username: user.displayName,
       image: imgUrl,
    })

    setInput("");
    setImgUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
