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
  ReactIcon,
  HtmlIcon,
  CssIcon,
  ReduxIcon,
  GitIcon,
  GatsbyIcon,
  JsIcon,
  NpmIcon,
  GraphqlIcon,
  StyledIcon,
  VsIcon,
  LinuxIcon,
  Section1,
  Section2,
  Section3,
  Section4,
  ExternalLink,
} from "../components/about/about.style"

export default function About() {
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
          <Heading>What I Use</Heading>
          <AnimatedList>
            <ul>
              <li>
                <HtmlIcon title="Html5" />
                <CssIcon title="Css3" />
                <JsIcon title="Javascript" />
              </li>
              <li>
                <ReactIcon title="React" />
                <ReduxIcon title="Redux" />
                <GatsbyIcon title="Gatsby" />
              </li>
              <li>
                <GraphqlIcon title="GraphQl" />
                <NpmIcon title="Npm" />
                <GitIcon title="Git" />
              </li>
              <li>
                <StyledIcon title="StyledComponents" />
                <VsIcon title="VSCode" />
                <LinuxIcon title="GNU/Linux" />
              </li>
            </ul>
          </AnimatedList>
        </Section2>
        <Section3 id="section3">
          <Heading>Bio</Heading>
          <p>
            I want to create attractive and useful apps and webpages, so I
            became a front-end developer.
            <br />
            <br />
            Tailored applications and websites can make your daily life much
            convenient.
            <br />
            <br />I like using things that have a form that matches the content.
            I try to reflect it in my projects as well.
          </p>
        </Section3>
        <Section4 id="section4">
          <Heading>Contact</Heading>
          <ExternalLink
            href="https://dev.to/ptrklk"
            target="_blank"
            rel="noopener noreferrer"
          >
            dev.to Profile
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/piotr-kielak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </ExternalLink>
          <Footer absolute />
        </Section4>
      </main>
    </>
  )
}
