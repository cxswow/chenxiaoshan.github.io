import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import BlogPostPreview from '../../components/blog-post-preview'

const Posts = styled.div`
  margin: 1rem;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Blog = styled.div`
  margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: 700px;
  }

  @media (max-width: 500px) {
    width: 500px;
  }
`

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Blog>
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>

        <Posts>
          {posts.map(post =>
            <BlogPostPreview
              key={post.node.fields.slug}
              post={post}
            />
          )}
        </Posts>
      </Blog>
    )
  }
}

export default BlogIndex

export const blogIndexQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
