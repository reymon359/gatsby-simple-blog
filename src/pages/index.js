import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import Article from '../components/article'

export default ({ data }) => (
  <Layout>
    <Title text="Welcome" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi iure
      error officiis unde? Modi, non. Molestiae suscipit atque hic reiciendis ut
      architecto, dolorem consectetur adipisci perspiciatis repudiandae?
      Molestiae, ullam!
    </p>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Article
          id={node.id}
          to="/"
          keywords={node.frontmatter.keywords}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
        />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            keywords
            date(formatString: "MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`
