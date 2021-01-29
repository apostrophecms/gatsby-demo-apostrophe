import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {
  const page = data.aposCorePage

  return (
    <>
      <Layout>
        <h1 className="text-2xl mb-6">Welcome to Camp Rainbow Lake</h1>
        {page._rendered && (
          <div dangerouslySetInnerHTML={{ __html: page._rendered }} />
        )}
      </Layout>
    </>
  )
}

export const query = graphql`
  query HomeContent {
    aposCorePage(slug: { eq: "/" }) {
      title
      _rendered
    }
  }
`
