import React from "react"
import SEO from "../components/seo/seo.component"
import Navbar from "../components/navbar/navbar.component"
import Sidebar from "../components/about/sidebar/sidebar.component"
import Footer from "../components/footer/footer.component"
import {
  Heading,
  AnimatedHeading,
  AnimatedSubHeading,
  AnimatedList,
  Section1,
  Section2,
  Section3,
  Section4,
} from "../components/about/about.style"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <>
      <Navbar fixed />
      <Sidebar />
      <SEO
        title="About"
        description="Some information about me, what I was doing, what am I doing, and what I want to do."
      />
      <main>
        <Section1 id="section1">
          <AnimatedHeading>
            PIOTR
            <br />
            KIELAK
          </AnimatedHeading>
          <AnimatedHeading>
            PTR
            <br />
            KLK
          </AnimatedHeading>
          <AnimatedSubHeading>FRONTEND DEVELOPER</AnimatedSubHeading>
        </Section1>
        <Section2 id="section2">
          <Heading>Technologies</Heading>
          <AnimatedList>
            <ul>
              <li>Html/CSS</li>
              <li>React/Redux</li>
              <li>Npm</li>
              <li>Git</li>
              {/* <li>Npm</li>       */}
              {/* <li>Git</li> */}
            </ul>
          </AnimatedList>
        </Section2>
        <Section3 id="section3">
          <Heading>Bio</Heading>
          <p>
          I want to create attractive and useful apps and webpages, so I became a front-end developer. 
          <br/><br/>
          Tailored applications and websites can make your daily life much convenient. 
          <br/><br/>
          I like using things that have a form that matches the content. I try to reflect it in my projects as well.
          </p>
        </Section3>
        <Section4 id="section4">
          <Heading>Contact</Heading>
          <p>my mail</p>
          <Footer absolute />
        </Section4>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
