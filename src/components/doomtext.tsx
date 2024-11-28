import React from "react";
import * as styles from "./doomtext.module.css"
import { StaticImage } from "gatsby-plugin-image"

export enum DoomTextOption {
  About,
  Blog,
  CheckoutMyBlog,
  FullName,
  OtherRecentPosts,
  ReadMyStuff,
  ThingsILike
}

interface DoomTextProps {
  doomText: DoomTextOption;
  children?: React.ReactNode;
}

const DoomText: React.FC<DoomTextProps> = ({ doomText }) => {
  switch (doomText) {
    case DoomTextOption.About:
      return (
        <div className="center-image-vertical max-height">
          <StaticImage
            width={70}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.about_image}
            alt="About"
            src="../images/nocrawl/ABOUT.png"
          />
        </div>
      );
    case DoomTextOption.Blog:
      return (
        <div className="center-image-vertical max-height">
          <StaticImage
            width={54}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.blog_image}
            alt="Blog"
            src="../images/nocrawl/BLOG.png"
          />
        </div>
      );
    case DoomTextOption.FullName:
      return (
        <div className={`${styles.fullname_image_container} center-image-vertical max-height`}>
          <StaticImage
            width={192}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.fullname_image}
            alt="Nooa Lumilaakso"
            src="../images/nocrawl/NOOA_LUMILAAKSO.png"
          />
        </div>
      );
    case DoomTextOption.CheckoutMyBlog:
      return (
        <h2>
          <span className="sr-only">Checkout My Blog!</span>
          <StaticImage
            width={207}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.checkoutmyblog_image}
            alt="Checkout My Blog!"
            src="../images/nocrawl/CHECKOUT_MY_BLOG.png"
            aria-hidden={true}
          />
        </h2>
      );
    case DoomTextOption.OtherRecentPosts:
      return (
        <h2>
          <span className="sr-only">Other recent posts!</span>
          <StaticImage
            width={230}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.otherrecentposts_image}
            alt="Other recent posts!"
            src="../images/nocrawl/OTHER_RECENT_POSTS.png"
            aria-hidden={true}
          />
        </h2>
      );
    case DoomTextOption.ReadMyStuff:
      return (
        <h1>
          <span className="sr-only">Read My Stuff!</span>
          <StaticImage
            width={161}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.readmystuff_image}
            alt="Read My Stuff!"
            src="../images/nocrawl/READ_MY_STUFF.png"
            aria-hidden={true}
          />
        </h1>
      );
    case DoomTextOption.ThingsILike:
      return (
        <h2>
          <span className="sr-only">Things I Like!</span>
          <StaticImage
            width={143}
            height={12}
            transformOptions={{fit: "contain"}}
            className={styles.thingsilike_image}
            alt="Things I Like!"
            src="../images/nocrawl/THINGS_I_LIKE.png"
            aria-hidden={true}
          />
        </h2>
      );
  };
}

export default DoomText
