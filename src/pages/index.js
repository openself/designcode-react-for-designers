import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to<br/>
          design and code<br/>
          <span>modern apps</span>
        </h1>
        <p>Complete courses about the best tools and design systems.
          Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video </Link>
      </div>

    </div>

    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*<Image/>*/}
    {/*</div>*/}

  </Layout>
)

export default IndexPage
