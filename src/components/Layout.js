import React from "react"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto mb-6 mt-8 max-w-3xl">
        <section className="mx-auto max-w-3xl">{children}</section>
      </main>
    </>
  )
}
