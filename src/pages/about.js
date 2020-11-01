import React from "react"
import SEO from "../components/seo/seo.component"
import Navbar from "../components/navbar/navbar.component"
import Sidebar from "../components/about/sidebar/sidebar.component"
import Figcaption from "../components/about/figcaption/figcaption.component"
import Logo from "../components/about/hero/hero.component"
import Technology from "../components/about/technology/technology.component"
import List from "../components/about/list/list.component"
import Bio from "../components/about/bio/bio.component"
import Social from "../components/about/social/social.component"
import Footer from "../components/footer/footer.component"
import {
  Heading,
  Hero,
  Tech,
  Biography,
  Portfolio,
  Contact,
} from "../components/about/about.style"
import { graphql } from "gatsby"

export default function About({ data }) {
  const images = [...data.allFile.edges.map(e => e.node)]

  return (
    <>
      <Navbar fixed />
      <Sidebar />
      <SEO
        title="About"
        description="Some information about me, what I was doing, what am I doing, and what I want to do."
      />
      <main>
        <Hero
          Tag="figure"
          fluid={
            images.find(e => e.base === "keyboard.jpg").childImageSharp.fluid
          }
          id="hero"
        >
          <figcaption>
            <Logo />
          </figcaption>
        </Hero>
        <Biography
          Tag="figure"
          fluid={
            images.find(e => e.base === "tinkerer.jpg").childImageSharp.fluid
          }
          id="bio"
        >
          <Figcaption>
            <Heading>About Me</Heading>
            <Bio data={data} />
          </Figcaption>
        </Biography>
        <Tech
          Tag="figure"
          fluid={
            images.find(e => e.base === "technology.jpg").childImageSharp.fluid
          }
          id="tech"
        >
          <Figcaption>
            <Heading>Technologies I Use</Heading>
            <Technology />
          </Figcaption>
        </Tech>
        <Portfolio
          Tag="figure"
          fluid={images.find(e => e.base === "work.jpg").childImageSharp.fluid}
          id="portfolio"
        >
          <Figcaption>
            <Heading>Portfolio</Heading>
            <List data={data} />
          </Figcaption>
        </Portfolio>
        <Contact
          Tag="figure"
          fluid={
            images.find(e => e.base === "contact.jpg").childImageSharp.fluid
          }
          id="contact"
        >
          <Figcaption>
            <Heading>Contact Me</Heading>
            <Social />
          </Figcaption>
          <Footer light />
        </Contact>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "images/about" } }) {
      edges {
        node {
          base
          childImageSharp {
            fluid(
              maxWidth: 3840
              duotone: { highlight: "#F8F7FF", shadow: "#1E1E24" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    githubData {
      data {
        user {
          url
          avatarUrl
          isHireable
          name
          login
          repositories {
            edges {
              node {
                name
                url
                homepageUrl
                repositoryTopics {
                  nodes {
                    url
                    topic {
                      name
                    }
                  }
                }
                description
                pushedAt
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
