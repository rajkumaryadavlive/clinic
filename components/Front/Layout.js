import React from 'react'
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
const Layout=({children})=>{
    return (
        <React.Fragment>
            
         <div className="main-wrapper">

           <Header />

           
               {children}
           
           <Footer />
         </div>
        </React.Fragment>
    )
}

export default Layout;