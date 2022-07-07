import React from "react";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index({ data: { allPosts, site, blog, home } }) {
  const heroPost = allPosts.nodes[0];

  return (
    <Container>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}

      <iframe src={home.iframeSourceUrl} frameborder="0" title="embeded player"/>
    </Container>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    home: datoCmsBlog {
      iframeSourceUrl
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
