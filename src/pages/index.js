import React from "react"
import Header from "../components/header"
import Layout from "../components/layout";

import "../styles/global.css"


export default function Home() {
  return (
    <Layout>
        <Header headerText="hello" />
    </Layout>
  );
}