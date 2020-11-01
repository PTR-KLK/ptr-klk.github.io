import React from "react"
import Layout from "../components/layout/layout.component"
import Header from "../components/header/header.component"
import { Hyperlink } from "../components/index/index.style"
import { graphql } from "gatsby"
import BlogpostLink from "../components/index/blogpostLink/blogpostLink.component"

export default function Home({ data }) {
  return (
    <Layout
      title={"Main page"}
      description={"Recent news from my journey in the web development world."}
    >
      <Header />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Hyperlink key={node.id} to={node.fields.slug}>
          <BlogpostLink node={node} />
        </Hyperlink>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            tags
          }
          cover_image {
            childImageSharp {
              fluid(
                maxWidth: 2560
                duotone: { highlight: "#F8F7FF", shadow: "#1E1E24" }
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
