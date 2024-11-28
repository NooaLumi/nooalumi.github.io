import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({title, description, pathname, children}) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_FI" />
      <meta name="google-site-verification" content="xUcUZTKNJE05sOB3nDI6HRucWFe3TY-cBmKRnPWZNKs" />
      { pathname === undefined && (
        <>
          <meta property="og:image" content={`${siteUrl}/nooa_lumilaakso_profile_picture.jpg`} />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1342" />
          <meta property="og:image:height" content="1342" />
        </>
      )}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />
      <link rel="icon" type="image/x-icon" href={`${siteUrl}/favicon.ico`} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "url": "https://nooalumi.github.io",
            "description": "A 22-year-old Full-Stack Web Developer with a passion for technology and creative problem-solving.",
            "name": "Nooa Lumilaakso",
            "givenName": "Nooa",
            "jobTitle": "Full-Stack Web Developer",
            "sameAs": [
              "https://www.linkedin.com/in/nooa-lumilaakso-212581243/"
            ],
            "knowsLanguage": [
              "English",
              "Finnish"
            ],
            "email": "nooa.lumilaakso@gmail.com",
            "gender": "Male"
          }
        `}
      </script>
      {children}
    </>
  )
}

export default Seo;
