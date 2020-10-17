import React from "react"
import SEO from "../components/seo/seo.component"
import Navbar from "../components/navbar/navbar.component"
import Sidebar from "../components/about/sidebar/sidebar.component"
import Logo from "../components/about/hero/hero.component"
import Technology from "../components/about/technology/technology.component"
import List from "../components/about/list/list.component"
import Bio from "../components/about/bio/bio.component"
import Social from "../components/about/social/social.component"
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
          <figcaption>
            <Heading>About Me</Heading>
            <Bio data={data} />
          </figcaption>
        </Biography>
        <Tech
          Tag="figure"
          fluid={
            images.find(e => e.base === "technology.jpg").childImageSharp.fluid
          }
          id="tech"
        >
          <figcaption>
            <Heading>Technologies I Use</Heading>
            <Technology />
          </figcaption>
        </Tech>
        <Portfolio
          Tag="figure"
          fluid={images.find(e => e.base === "work.jpg").childImageSharp.fluid}
          id="portfolio"
        >
          <figcaption>
            <Heading>Portfolio</Heading>
            <List data={data} />
          </figcaption>
        </Portfolio>
        <Contact
          Tag="figure"
          fluid={
            images.find(e => e.base === "contact.jpg").childImageSharp.fluid
          }
          id="contact"
        >
          <figcaption>
            <Heading>Contact Me</Heading>
            <Social />
          </figcaption>
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
