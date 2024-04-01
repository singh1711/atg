import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{
        width:"1440px",
        height:"72px"
    }}>
        <img src="src\assets\whole.png" alt="" style={{width: "162.57px",height: "24px",position:"absolute",top:"24px",left: "72px"}} />
        <input type="search" placeholder="Search for your favorite groups in ATG" style={{width: "360px",height: "42px",position:"absolute",top:"16px",left:"540px",borderRadius:"21px"}}/>
        <p className="account" style={{border:"none",backgroundColor:"none", width: "183px",height: "21px",position:"absolute", top: "27px",left: "1161px",fontFamily: "IBM Plex Sans",fontSize: "16px",lineHeight: "21px",letterSpacing: "0em",textAlign: "right"}}>Create account.<Link to="/login"> It's free </Link></p>
        <div style={{width: "1440px",height: "440px",position:"relative", top: "72px"}}>
          <img src="src\assets\Rectangle 2.png" alt="" />
          <h1 style={{position:"absolute" ,top:"286px",left:"200px", lineHeight:"46.8px",fontWeight:"bolder", color:"white"}}>Computer Engineering</h1>
          <h3 style={{position:"absolute" ,top:"339px",left:"200px",color:"white", fontSize:"18px"}}>142,765 Computer Engineers follow this</h3>
        </div>
    </div>
  )
}

export default Header