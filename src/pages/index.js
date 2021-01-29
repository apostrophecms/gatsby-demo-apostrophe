import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {

  return (
    <>
      <Layout>
        <h1 className="text-2xl mb-6">Welcome to Camp Rainbow Lake</h1>
      </Layout>
    </>
  )
}
