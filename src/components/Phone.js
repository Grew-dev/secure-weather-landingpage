import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import "../css/main.css"
import "../pages/mystyles.scss"

const getPhone = graphql`
  {
    fluid: file(relativePath: { eq: "iphone2020_demo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Phone = () => {
    const data = useStaticQuery(getPhone)
    return (
      
        <div className="movetocenter">
              <Image
              className="image "
              style={{
                height: "auto",
                width: "450px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              fluid={data.fluid.childImageSharp.fluid}
            />
        </div>
    )
}

export default Phone
