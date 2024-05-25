import * as React from "react"

interface SeoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({ description, title, children }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  )
}

export default Seo;
