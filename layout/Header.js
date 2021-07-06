import React,{useState} from 'react'
import Navigation from '../components/Front/Navigation'
import Appointment from '../components/Front/Appointment'
import Menu from '../components/Front/Menu'
import Search from '../components/Front/Search'
import HeaderContainer from '../components/Front/HeaderContainer'
const Header=()=>{

  const[show,setShow]=useState(false);
  const close=()=>setShow(false)
  const open=()=>setShow(true)

  console.log(show)

	return(<>

 <header className="menu_area-light">

             <HeaderContainer />

            <div className="navbar-default bg-secondary">

              {/* start top search */}
                 <Search />
              {  /* end top search  */ }

                <div className="menu_area alt-font">
                    <div className="container">
                     <nav className="navbar navbar-expand-lg navbar-light p-0">

                         <div className="navbar-toggler"></div>

                       { /* menu area */ }
                          <Menu />
                       {/* end menu area */}

 
                       {/* start attribute navigation */}
                         <Navigation open={open}/>
                    
                       {/*    end attribute navigation */ }
                    
                     </nav>
                    </div>
                </div>
            </div>

          <Appointment show={show} close={close} />
     </header>
 

        

		  </>
		  )

}

export default Header;