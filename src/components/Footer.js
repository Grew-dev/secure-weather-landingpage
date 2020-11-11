import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import "../pages/mystyles.scss"

const getFlag = graphql`
  {
    fluid: file(relativePath: { eq: "flag.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Footer = () => {
  
const data = useStaticQuery(getFlag)
  return (
    
    <footer className="footer footer-background">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <div>
                <p className="footer-heading">Created by:</p>
                <div className="creators">
                  <a href="https://twitter.com/ihmissuti">@ihmissuti</a>
                  <a href="https://twitter.com/aleksimmonen">@aleksimmonen</a>
                  <a href="https://twitter.com/JMeriluoto">@JMeriluoto</a>
                </div>
                
            </div>
          </div>
          <div className="column">
            <p className="footer-heading">Contact</p>
            <div className="grew ">
              <a style={{color:"white"}}href="https://grew.dev" target="_blank">Grew</a>
              <FiExternalLink size={14} style={{marginBottom:"5px", marginLeft:"2px"}}/>
            </div>
            <div className="social-icons">
            <a href="https://www.linkedin.com/company/global-reaction-company" style={{marginRight:"10px"}}>
              <FaLinkedin className="icon"></FaLinkedin>
            </a>
            <a href="https://twitter.com/Grewdev">
              <FaTwitterSquare className="icon"></FaTwitterSquare>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer