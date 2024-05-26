import React from "react";
import * as styles from "./profile.module.css"
import Doomguy from "./doomguy"
import { SocialIcon } from "react-social-icons"

const Profile: React.FC = () => {
  return (
    <div className={styles.info}>
      <Doomguy/>
      <div>
        Hello! My name is Nooa, and I do programming and a bunch of other cool stuff. 
        <br/>
        <ul className={styles.socialIcons}>
          <li><SocialIcon className={styles.socialIcon} url="https://www.linkedin.com/in/nooa-lumilaakso-212581243/"/></li>
          <li><SocialIcon className={styles.socialIcon} url="https://github.com/NooaLumi"/></li>
        </ul>
      </div>
    </div>
  );
}

export default Profile 
