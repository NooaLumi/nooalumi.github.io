import React from "react";
import * as styles from './profileblurb.module.css'
import {StaticImage} from 'gatsby-plugin-image'
import Socials from "./socials"

const ProfileBlurb: React.FC = () => {
  return (
  <div className={styles.container}>
    <StaticImage className={styles.image} src="../../static/nooa_lumilaakso_profile_picture_art.png" alt="todo update" width={150} height={150} />
    <div className={styles.subcontainer}>
      <span className={styles.name}>Nooa Lumilaakso</span>
      <span className={styles.text}>Software developer, I guess. </span>
      <div className={styles.socialscontainer}>
        <Socials className={styles.socials}/>
      </div>
    </div>
  </div>
  );
}

export default ProfileBlurb
