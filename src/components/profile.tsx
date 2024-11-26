import React from "react";
import * as styles from "./profile.module.css"
import Doomguy from "./doomguy"
import Socials from "./socials"

const Profile: React.FC = () => {
  return (
    <div className={styles.info}>
      <Doomguy/>
      <div>
        Hello! My name is Nooa, and I do programming and a bunch of other cool stuff <span className="fire-icon">🔥</span>
        <br/>
        <Socials/>
      </div>
    </div>
  );
}

export default Profile 
