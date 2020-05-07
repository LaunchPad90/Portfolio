import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
        <div style={{ color: `teal` }}>
            <h1>About Gatsby</h1>
            <Header 
                headerText="Welcome to the headerText"
            />
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
  )
}