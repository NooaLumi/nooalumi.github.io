import React from "react";
import * as styles from "./socials.module.css"
import { SocialIcon } from "react-social-icons"

interface ProfileProps {
  className?: string
}

const Profile: React.FC<ProfileProps> = ({className = ''}) => {
  return (
    <ul className={`${styles.socialIcons} ${className}`}>
      <li><SocialIcon className={styles.socialIcon} url="https://www.linkedin.com/in/nooa-lumilaakso-212581243/"/></li>
      <li><SocialIcon className={styles.socialIcon} url="https://www.instagram.com/nooalumi/profilecard/?igsh=Y2xwcjIwYWNzYjN1"/></li>
      <li><SocialIcon className={styles.socialIcon} url="https://discord.com/users/warmsnow_"/></li>
      <li><SocialIcon className={styles.socialIcon} url="mailto:nooa.lumilaakso@gmail.com"/></li>
      <li><SocialIcon className={styles.socialIcon} url="https://github.com/NooaLumi"/></li>
    </ul>
  );
}

export default Profile 
