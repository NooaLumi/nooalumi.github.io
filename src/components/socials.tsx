import React from "react";
import * as styles from "./socials.module.css"
import { SocialIcon } from "react-social-icons"

const Profile: React.FC = () => {
  return (
    <ul className={styles.socialIcons}>
      <li><SocialIcon className={styles.socialIcon} url="https://www.linkedin.com/in/nooa-lumilaakso-212581243/"/></li>
      <li><SocialIcon className={styles.socialIcon} url="https://github.com/NooaLumi"/></li>
      <li><SocialIcon className={styles.socialIcon} url="https://discord.com/users/warmsnow_"/></li>
      <li><SocialIcon className={styles.socialIcon} url="mailto:nooa.lumilaakso@gmail.com"/></li>
    </ul>
  );
}

export default Profile 
