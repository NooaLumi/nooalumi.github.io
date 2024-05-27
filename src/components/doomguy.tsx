import React from "react";
import { useEffect, useState } from "react"
import * as styles from "./doomguy.module.css"
import { StaticImage } from "gatsby-plugin-image"

type ImageIndex = 0 | 1 | 2 | 3;

const Doomguy: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<ImageIndex>(0);
  const [isHurt, setIsHurt] = useState(false);

  // Toggle screen red when isHurt
  useEffect(() => {
    document.body.classList[isHurt ? "add" : "remove"](styles.hurt);
    return () => document.body.classList.remove(styles.hurt);
  }, [isHurt]);

  // Switch image at intervals and clear isHurt
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(imageIndex === 3 ? 0 : imageIndex + 1 as ImageIndex);
      setIsHurt(false);
    }, 600);
    
    return () => clearInterval(interval);
  }), [];

  return (
    <div className={styles.imageContainer} onClick={() => setIsHurt(true)} aria-hidden={true}> {/* I imagine a screenreader would be confused lmao */}
      <StaticImage
      className={`${styles.image} ${styles.imageBase} ${imageIndex > 1 ? ' ' + styles.imageHidden : ''}`}
      alt="Male face looking forwards"
      src="../images/face_forwards.png"
      />
      <StaticImage
      className={`${styles.image} ${imageIndex !== 2 ? ' ' + styles.imageHidden : ''}`}
      alt="Male face looking left"
      src="../images/face_left.png"
      />
      <StaticImage
      className={`${styles.image} ${imageIndex !== 3 ? ' ' + styles.imageHidden : ''}`}
      alt="Male face looking right"
      src="../images/face_right.png"
      />
      <StaticImage
      className={`${styles.image} ${isHurt === false ? ' ' + styles.imageHidden : ''}`}
      alt="Male face looking angry"
      src="../images/face_hurt.png"
      />
    </div>
  );
}

export default Doomguy
