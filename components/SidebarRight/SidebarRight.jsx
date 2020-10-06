import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import './SidebarRight.css'


function SidebarRight() {
    return (
        <div className="sidebarRight">
            <div className="box">
                <div className="contactIcon">
                    Contact Me @
                </div>
                <div className="contactIcon">
                 <LinkedInIcon /> <h4>Linkedin</h4> 
                </div>
                <div className="contactIcon">
                 <GitHubIcon />  <h4>Github</h4>  
                </div>
                <div className="contactIcon">
                 <LanguageIcon />  <h4>Website</h4>  
                </div>
            </div>
                
              

        </div>
    )
}

export default SidebarRight
