import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { PostFeed } from '../components/PostFeed';

const HomePage = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <section>
        <div>I am a software engineer based in London, UK.</div>
        <div>I am interested in software, product strategy and engineering management.</div>
      </section>
      <main className="py-8">
        {postEdges.length === 0 ? <>No posts, yet.</> : <PostFeed postEdges={postEdges} />}
      </main>
    </Layout>
  );
};

export default HomePage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            dateFormatted
          }
          excerpt
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
