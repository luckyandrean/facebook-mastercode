import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Homeicon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton} from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ForumIcon from "@material-ui/icons/Forum";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './../../State/StateProvider';


function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="headerLeft"> 
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>

                <div className="headerInput">
                    <SearchIcon />
                    <input 
                    type="text" 
                    placeholder="Search something"
                    />
                </div>

            </div> 

            <div className="headerCenter">
                <div className="headerOption headerOptionActive">
                    <Homeicon />
                </div>
                <div className="headerOption">
                    <FlagIcon />
                </div>
                <div className="headerOption">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="headerOption">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="headerOption">
                    <SupervisedUserCircleIcon />
                </div>
            </div>

            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src={user.photoURL} />
                    <h4> {user.displayName} </h4>
                </div>

                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>

            </div>
        </div>
    )
}

export default Header
