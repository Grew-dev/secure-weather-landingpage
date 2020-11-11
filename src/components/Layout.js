import React from 'react'
import Footer from "./Footer"
import "../pages/mystyles.scss"
import "../css/main.css"



const Layout = ({children}) => {
    return (
        <div className="general-background" >
            {children}
            <Footer />
        </div>
    )
}

export default Layout
