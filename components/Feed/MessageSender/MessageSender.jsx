import React, { useState} from 'react'
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from './../../../config/firebase/config';
import firebase from 'firebase';
import { useStateValue } from './../../../State/StateProvider';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput('');
        setImageUrl('');
    };
    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    className="messageSenderInput" 
                    value= {input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                    value= {imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    type="text" 
                    placeholder="img url (optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSenderBottom">
                <div className="messageSenderOption">
                    <VideocamIcon style= {{ color: "red "}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSenderOption">
                    <PhotoLibraryIcon style= {{ color: "green "}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSenderOption">
                    <InsertEmoticonIcon style= {{ color: "orange "}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
