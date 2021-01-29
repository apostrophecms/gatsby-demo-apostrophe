import React from "react"
import Layout from "../components/Layout"

export default function Programs({ data }) {

  return (
    <>
      <Layout>
        <h1 className="text-2xl mb-6">Camp Sessions</h1>
      </Layout>
    </>
  )
}

function formatDate(date) {
  const obj = new Date(date)
  return obj.toLocaleDateString()
}

function ageGroupToRange(group) {
  return group.split("to")
    .map(n => parseInt(n))
    .join(" - ")
}