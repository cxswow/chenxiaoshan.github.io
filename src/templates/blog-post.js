import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Post = styled.div`
  margin: 1rem;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 700px) {
    width: 700px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

const StyledP = styled.p`
  color: #aaa;
`

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (this.props.data.markdownRemark.fields.tagSlugs) {
      const tagsArray = this.props.data.markdownRemark.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider =
          i < tagsArray.length - 1 &&
          <span>
            {" | "}
          </span>
        return (
          <span key={tag}>
            <Link to={tag}>
              {this.props.data.markdownRemark.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <em>
          标签：{tags}
        </em>
      )
    }

    return (
      <Post>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[{ name: "description", content: post.excerpt }]}
        />
        <div>
          <h1>
            {post.frontmatter.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {tagsSection}
          <StyledP>
            {post.frontmatter.date}
          </StyledP>
        </div>
      </Post>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
      }
    }
  }
`
