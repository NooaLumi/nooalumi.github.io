import React from "react";
import * as styles from "./profile.module.css"
import Doomguy from "./doomguy"
import Socials from "./socials"

const Profile: React.FC = () => {
  return (
    <div className={styles.info}>
      <Doomguy/>
      <div>
        Hello! My name is Nooa, and I do programming and a bunch of other cool <span className="no-wrap-text">stuff <span className="fire-icon">🔥</span></span>
        <br/>
        <Socials/>
      </div>
    </div>
  );
}

export default Profile 
