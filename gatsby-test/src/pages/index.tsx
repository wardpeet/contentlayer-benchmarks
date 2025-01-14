import * as React from "react";
import { graphql, PageProps } from "gatsby";

import type { Page } from "../types/Page";

type RemarkNode = Page;

type DataProps = {
  allMarkdownRemark: {
    nodes: RemarkNode[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const pages = data.allMarkdownRemark.nodes;

  return (
    <div>
      {pages.map((page) => (
        <a
          style={{ display: "block" }}
          key={page.fields.url}
          href={page.fields.url}
        >
          {page.frontmatter.title}
        </a>
      ))}
    </div>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        fields {
          url
        }
      }
    }
  }
`;

export default IndexPage;
