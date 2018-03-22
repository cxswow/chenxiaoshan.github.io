import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Post = styled(Link)`
  position: relative;
  margin: 1rem;
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  border: 0.15rem solid black;
  border-radius: 1rem;

  &:hover {
    -webkit-box-shadow: 0.5px 0.5px 20px #aaa;
    -moz-box-shadow: 0.5px 0.5px 20px #aaa;
    box-shadow: 0.5px 0.5px 20px #aaa;
  }

  p {
    color: #aaa;
  }

  h2 {
    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
  }

`

const Ear = styled.div`
  position: absolute;
  z-index: -1;
  background: #000;
  width: 2rem;
  height: 2rem;
`

const LeftEar = styled(Ear)`
  top: -0.8rem;
  left: 0;
  border-radius: 20% 150% 0% 0%;
  animation: moveLeft 2s infinite;

  @keyframes moveLeft {
    0% {
      transform: rotate(-20deg);
      transform-origin: top left;
    }
    50% {
      transform: rotate(-25deg);
      transform-origin: top;
    }
    100% {
      transform: rotate(-20deg);
      transform-origin: top left;
    }
  }
`
const RightEar = styled(Ear)`
  top: -0.8rem;
  right: 0;
  border-radius: 150% 20% 0% 0%;
  animation: moveRight 2s infinite;

  @keyframes moveRight {
    0% {
      transform: rotate(20deg);
      transform-origin: top right;
    }
    50% {
      transform: rotate(25deg);
      transform-origin: top;
    }
    100% {
      transform: rotate(20deg);
      transform-origin: top right;
    }
  }
`

class BlogPostPreview extends React.Component {
  render() {
    const post = this.props.post
    return (
      <Post to={post.node.fields.slug}>
        <LeftEar />
        <RightEar />
        <h2>{post.node.frontmatter.title}</h2>
        <p>{post.node.frontmatter.date}</p>
      </Post>
    )
  }
}

export default BlogPostPreview
