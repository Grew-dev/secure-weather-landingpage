import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Safety from "../components/Safety"
import "./mystyles.scss"
import "../css/main.css"

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Safety/>
    </Layout>
  )
}
