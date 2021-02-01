import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function AposPage({ data }) {
  const page = data.aposCorePage
  let subNav = []
  if (data.allSitePage && data.allSitePage.edges) {
    subNav = data.allSitePage.edges.map(e => {
      return {
        title: e.node.context.title,
        slug: e.node.context.slug,
      }
    })
  }

  return (
    <Layout>
      <>
        <header>
          <h1 className="text-2xl mb-6">{page.title || ""}</h1>
          {!!subNav.length && (
            <nav className="mb-6">
              <ul>
                {subNav.map(item => {
                  return (
                    <li className="mr-6" key={item.slug}>
                      <a
                        className="text-blue-500 hover:text-blue-800"
                        href={item.slug}
                      >
                        {item.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}
        </header>
        {page._rendered && (
          <div dangerouslySetInnerHTML={{ __html: page._rendered }} />
        )}
      </>
    </Layout>
  )
}

