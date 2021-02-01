import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Staff({ data }) {
  const staff = data.allAposStaffMember.nodes

  return (
    <>
      <Layout>
        <h1 className="text-2xl mb-6">Camp Staff</h1>
        <div>
          {staff.map(item => {
            return (
              <section className="mb-4" key={item.id}>
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-lg">{item.jobTitle}</p>
                {item.funFact && <p>Fun fact: {item.funFact}</p>}
                {item.photo && item.photo._rendered && (
                  <div className="max-w-xs"
                    dangerouslySetInnerHTML={{ __html: item.photo._rendered }}
                  />
                )}
              </section>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query StaffQuery {
    allAposStaffMember {
      nodes {
        id
        jobTitle
        title
        funFact
        photo {
          _rendered
        }
      }
    }
  }
`
