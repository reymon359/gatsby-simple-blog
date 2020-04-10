import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <h1>This is the index page</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi iure
        error officiis unde? Modi, non. Molestiae suscipit atque hic reiciendis
        ut architecto, dolorem consectetur adipisci perspiciatis repudiandae?
        Molestiae, ullam!
      </p>
    </div>
  </Layout>
)
