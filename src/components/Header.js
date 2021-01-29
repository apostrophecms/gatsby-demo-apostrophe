import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
import { Link } from "gatsby"
import logo from "../assets/rl-logo.svg"

export default function Header() {
  const linkClasses = "text-blue-500 hover:text-blue-800"

  return (
    <header className="rl-header container mx-auto mb-6 mt-8 max-w-3xl flex">
      <a className="mr-6" href="/">
        <img src={logo} alt="Rainbow Lake Camp" className="w-16" />
      </a>
      <nav className="nav flex-grow flex items-center justify-end">
        <ul className="flex">
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
