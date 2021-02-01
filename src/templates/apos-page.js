import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function AposPage({ data }) {
  const page = data.aposCorePage
  let subNav = []

  return (
    <Layout>
      <>
        <header>
          <h1 className="text-2xl mb-6">{page.title || ""}</h1>
          {!!subNav.length && (
            <nav className="mb-6">
              <ul>
              </ul>
            </nav>
          )}
        </header>
      </>
    </Layout>
  )
}

