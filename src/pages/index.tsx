import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Feed from "../components/feed"
import DoomText, {DoomTextOption} from "../components/doomtext"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Profile/>
      <DoomText doomText={DoomTextOption.ThingsILike}/>
      <ul className="list-fun">
        {/* <li><a href="https://www.youtube.com/watch?v=ZSRHeXYDLko">This talk</a> by Jonathan Blow on how software degrades over time</li> */}
        <li><a href="https://www.poetry.com/poem/105446/what-is-the-price-of-experience%3F" title="What is the Price of Experience? by William Blake">This poem</a> by William Blake</li>
        <li><a href="https://www.gog.com/en/game/terraria" title="GOG - Terraria">Terraria</a> by Re-Logic and <a href="https://www.gog.com/game/Prey" title="GOG - Prey">Prey</a> by Arkane Austin (RIP)</li>
        <li>Maybe a quarter of the reciprocal of 1 ÷ 16 of my four siblings</li>
        <li><a href="https://www.youtube.com/watch?v=4XeeIFsysK4&list=PLgtvGkabBTggcwXCMx7hyeVJ_D0GyNPGw" title="Youtube - May Our Chambers Be Full by Thou & Emma Ruth Rundle">This album</a> by Thou & Emma Ruth Rundle</li>
        <li><a href="https://www.goodreads.com/book/show/103761.Zen_in_the_Art_of_Writing" title="Goodreads - Zen in the Art of Writing by Ray Bradbury">This book</a> on writing by Ray Bradbury, and <a href="https://www.goodreads.com/book/show/103758.Zen_in_the_Art_of_Archery" title="Goodreads - Zen in the Art of Archery by Eugen Herrigel">its namesake</a> by Eugen Herrigel</li>
        <li><a href="https://neovim.io/" title="Neovim">VIM</a> (suck it, Emacs)</li>
        <li>The only <a href="https://www.amazon.com/Kindle-Paperwhite-10th-Gen-Built/dp/B09BW9Y2L2" title="Amazon - Kindle Paperwhite 10th Gen">perfect piece of hardware</a> in existence (the software still sucks)</li>
        <li>The live version of <a href="https://www.youtube.com/watch?v=iz8m9sL8FUQ" title="Youtube - The Wholly Ghost (live) by King Gizzard">this King Gizzard song</a></li>
        <li><a href="https://www.goodreads.com/book/show/23754.The_Sandman_Vol_1" title="Goodreads - The Sandman VOl 1 by Neil Gaiman">This comic book series</a> by Neil Gaiman et al.</li>
        {/* <li>The <a href="https://youtu.be/LuKGGz-0Q7s">opening theme</a> of Space Dandy</li> */}
        {/* <li>Amateur Calisthenics so I can say I exercise</li> */}
        <li><a href="https://www.codedojo.com/?p=1620" title="Two guys made an MMO: The Growtopia Postmortem by Seth A. Robinson">This article</a> by Seth A. Robinson about how he and Mike Hommel made a mobile MMO game back in 2012</li>
        <li><a href="https://www.youtube.com/watch?v=gBu77h2FSCM" title="Youtube - RetroAhoy: X-COM by Ahoy">This video</a> by Ahoy about the X-COM fanchise</li>
        <li><a href="https://www.youtube.com/watch?v=yuxss1kBQWw" title="Youtube - Private Life by Oingo Boingo">This music video</a> by Oingo Boingo</li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Dammen_p%C3%A5_Kloumann-sj%C3%B8en_(The_dam_at_Lake_Klouman),_1908.jpg" title="Wikipedia Commons - Dammen på Kloumann-sjøen by Theodor Kittelsen">This painting</a> by Theodor Kittelsen</li>
        <li>TLDR: Cool stuff and the people that make it</li>
      </ul>
      <br/>
      <DoomText doomText={DoomTextOption.CheckoutMyBlog}/>
      <Feed postCount={3} />
      <Link to="/blog" className="button button-outline button-main">See all posts</Link>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Nooa's Homepage"/>

export default IndexPage
