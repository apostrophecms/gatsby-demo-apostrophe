import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from "../assets/rl-logo.svg"

export default function Header() {
  const data = useStaticQuery(graphql`
    query MainNav {
      allSitePage(
        filter: { path: { nin: ["/dev-404-page/", "/"] } }
        sort: { fields: [path], order: ASC }
      ) {
        edges {
          node {
            context {
              title
              slug
            }
          }
        }
      }
    }
  `)
  let nav = []
  if (
    data &&
    data.allSitePage &&
    data.allSitePage.edges &&
    data.allSitePage.edges.length
  ) {
    nav = data.allSitePage.edges
      .map(e => ({
        title: e.node.context.title,
        slug: e.node.context.slug,
      }))
      // Only include top level items.
      .filter(node => {
        return node.slug && node.slug.split("/").length === 2
      })
  }

  const linkClasses = "text-blue-500 hover:text-blue-800"

  return (
    <header className="rl-header container mx-auto mb-6 mt-8 max-w-3xl flex">
      <a className="mr-6" href="/">
        <img src={logo} alt="Rainbow Lake Camp" className="w-16" />
      </a>
      <nav className="nav flex-grow flex items-center justify-end">
        <ul className="flex">
          {nav.map(item => {
            return (
              <li className="ml-6" key={item.slug}>
                <Link className={linkClasses} to={item.slug}>
                  {item.title}
                </Link>
              </li>
            )
          })}
          <li className="ml-6">
            <Link className={linkClasses} to="/programs">
              Programs
            </Link>
          </li>
          <li className="ml-6">
            <Link className={linkClasses} to="/staff">
              Staff
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
