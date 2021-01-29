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
            const ageRange =
              item.ageGroup &&
              item.ageGroup
                .split("to")
                .map(n => parseInt(n))
                .join(" - ")

            return (
              <section className="mb-6" key={item.id}>
                <h2 className="text-xl">{item.title}</h2>
                <ul>
                  {item.cost && <li>Price: ${item.cost}</li>}
                  <li>Ages: {ageRange}</li>
                  <li>
                    Dates: {formatDate(item.startDate)} to{" "}
                    {formatDate(item.endDate)}
                  </li>
                </ul>
                {item.description && <p className="mt-3">{item.description}</p>}
                {item.photo && item.photo._rendered}
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
