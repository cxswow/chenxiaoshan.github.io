import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// const profilePic = require("../images/kyle-round-small-pantheon.jpg")
// import ReadNext from "../components/ReadNext"
//import { query } from '../components/ReadNext'
// const query = `
// readNext___file {
//   children {
//     ... on MarkdownRemark {
//       fields { slug }
//       excerpt(pruneLength: 200)
//       frontmatter {
//         title
//       }
//     }
//   }
// }
// `

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    console.log(post)

    let tags
    let tagsSection
    // if (this.props.data.markdownRemark.fields.tagSlugs) {
    //   const tagsArray = this.props.data.markdownRemark.fields.tagSlugs
    //   tags = tagsArray.map((tag, i) => {
    //     const divider =
    //       i < tagsArray.length - 1 &&
    //       <span>
    //         {" | "}
    //       </span>
    //     return (
    //       <span key={tag}>
    //         <Link to={tag}>
    //           {this.props.data.markdownRemark.frontmatter.tags[i]}
    //         </Link>
    //         {divider}
    //       </span>
    //     )
    //   })
    //   tagsSection = (
    //     <em>
    //       Tagged with {tags}
    //     </em>
    //   )
    // }

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[{ name: "description", content: post.excerpt }]}
        />
        <h1>
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {tagsSection}
        <p>
          Posted {post.frontmatter.date}
        </p>
      </div>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
