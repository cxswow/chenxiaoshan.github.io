import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import BlogPostPreview from '../components/blog-post-preview'
import CatButton from '../components/cat-button'

const Posts = styled.div`
  margin: 1rem;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const Div = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  pading: 0;
  border: 0;
  width: 100%;
`

const Tags = styled.div`
  margin: 1em;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 20%;

  @media (max-width: 500px) {
    display: none;
  }
`

class tagPage extends React.Component {
  render() {
    const posts = this.props.data.allmd.edges
    const allTags = this.props.data.tagGroup.group
    const curPath = this.props.location.pathname.split('/')
    let selectedTag = curPath[curPath.length-1]
    if (curPath.length > 1 && !selectedTag) selectedTag = curPath[curPath.length-2]

    return (
      <Div>
        <Posts>
          {posts.map(post =>
            <BlogPostPreview
              key={post.node.fields.slug}
              post={post}
            />
          )}
        </Posts>

        <Tags>
          <CatButton to='/blog'>All</CatButton>
          {allTags.map(tag => {
            if (kebabCase(tag.fieldValue) === selectedTag.toLowerCase())
              return <CatButton
                  key={tag.fieldValue}
                  primary={true}
                  to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </CatButton>
            else
              return <CatButton
                  key={tag.fieldValue}
                  to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </CatButton>
            }
          )}
        </Tags>
      </Div>
    )
  }
}

export default tagPage

export const tagPageIndexQuery = graphql`
  query TagPageIndexQuery($tag: String) {
    allmd: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

    tagGroup: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
