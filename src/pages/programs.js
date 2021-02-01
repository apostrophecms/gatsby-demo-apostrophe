import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Programs({ data }) {
  const programs = data.allAposProgram.nodes

  return (
    <>
      <Layout>
        <h1 className="text-2xl mb-6">Camp Sessions</h1>
        <div>
          {programs.map(item => {
            return (
              <section className="mb-6" key={item.id}>
                <h2 className="text-xl">{item.title}</h2>
                <ul>
                  {/*
                    The following pattern is a conditional, checking if we
                    have a `cost` value. We'll continue to use this.
                  */}
                  {item.cost &&
                    <li>Price: ${item.cost}</li>
                  }
                  {item.ageGroup &&
                    <li>Ages: {ageGroupToRange(item.ageGroup)}</li>
                  }
                  <li>
                    Dates: {formatDate(item.startDate)} to {formatDate(item.endDate)}
                  </li>
                </ul>
                {item.description && <p className="mt-3">{item.description}</p>}
              </section>
            )
          })}
        </div>
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

export const query = graphql`
  query ProgramList {
    allAposProgram(sort: { fields: [ageGroup], order: ASC }) {
      nodes {
        title
        startDate
        endDate
        description
        ageGroup
        cost
      }
    }
  }
`
