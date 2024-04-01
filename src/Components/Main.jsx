import React from 'react'
import {Outlet, Link } from 'react-router-dom'
import Login from './Login'

function Main() {
    
  return (
    <div>
        <div>
            <ul style={{listStyle:"none",position:"absolute",top:"559px",left:"200px",display:"flex", width:"358px", height:"21px",justifyContent:"space-between",fontSize:"15px"}}>
                <li style={{fontWeight:"bolder",width:"93px"}}>All Posts(32)</li>
                <li>Article</li>
                <li>Event</li>
                <li>Education</li>
                <li>Job</li>
            </ul>
            <div style={{position:"absolute",top:"559px",left:"966px",display:"flex", width:"250px", height:"21px",justifyContent:"space-between",fontSize:"15px"}} >
                <strong style={{backgroundColor:"#EDEEF0",width:"133px",height:"36px",display:"flex",justifyContent:"center",alignItems:"center"}}>Write a Post<i className="bi bi-caret-down-fill"></i></strong>
                <strong style={{backgroundColor:"#2F6CE5",color:"white", width:"125px", height:"36px",display:"flex", alignItems:"center",justifyContent:"center"}}><img src="src\assets\baseline-group_add-24px.png" alt=""  style={{width:"22px",height:"22px"}}/>Join Group
                 </strong>          
            </div>
            
            <div style={{position:"absolute", top :"575px", left:"225px",}}>
                <img src="src\assets\Line 2.png" alt="" style={{ width:"93px"}} />
                <img src="src\assets\Line.png" alt="" style={{width:"1040px",position:"relative"}}/>
            </div>
            <div style={{position:"absolute", top:"628px",left:"200px",width:"692px",height:"1751px",border:"1px solid #C4C4C4"}}>
                <div style={{border:"1px solid #C4C4C4"}}>
                    <img src="src\assets\Rectangle 5.png" alt="" style={{height:"220px",borderRadius:"4px 4px 0 0" }} />
                    <h4 style={{position:"absolute",top:"240px",left:"20px"}}>✍️ Article</h4>
                    <div style={{position:"absolute", top:"275px", left:"20px", display:"flex"}}>
                        <h1 style={{fontSize:"22px", width:"600px"}} >What if famous brands had regular fonts? Meet RegulaBrands!</h1>
                        <img src="src\assets\Group 3.png" alt="" style={{width:"28px", height:"28px"}} />
                    </div>
                    <p style={{position:"absolute", top:"347px", left:"20px", fontSize:"19px"}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div style={{position:"absolute",top:"404px",left:"20px", display:"flex"}}>
                        <img src="src\assets\Rectangle 3 (1).png" alt="" />
                        <h4 style={{position:"absolute",top:"12px",left:"58px",width:"125px",fontSize:"18px"}}>Sarthak Kamra</h4>
                        <img src="src\assets\icon\action\visibility_24px_outlined.png" alt="" style={{width:"18px", height:"18px",position:"absolute",top:"12px",left:"475px"}}/>
                        <h6 style={{width:"69px", height:"18px",position:"absolute",top:"12px",left:"501px",fontSize:"14px"}}>1.4k views</h6>
                        <i className="bi bi-share-fill" style={{width:"42px", height:"36px",position:"absolute",top:"12px",left:"610px",borderRadius:"2px"}}></i>
                    </div>
                </div>
                <div style={{position:"absolute",top:"470px", border:"1px solid #C4C4C4"}}>
                    <img src="src\assets\Rectangle 6.png" alt="" style={{height:"220px",borderRadius:"4px 4px 0 0" }} />
                    <h4 style={{position:"absolute",top:"240px",left:"20px"}}>🔬️ Education</h4>
                    <div style={{position:"absolute", top:"275px", left:"20px", display:"flex"}}>
                        <h1 style={{fontSize:"22px", width:"600px"}} >Tax Benefits for Investment under National Pension Scheme launched by Government</h1>
                        <img src="src\assets\Group 3.png" alt="" style={{width:"28px", height:"28px"}} />
                    </div>
                    <p style={{position:"absolute", top:"347px", left:"20px", fontSize:"19px"}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div style={{position:"absolute",top:"404px",left:"20px", display:"flex"}}>
                        <img src="src\assets\Rectangle 3 (2).png" alt="" />
                        <h4 style={{position:"absolute",top:"12px",left:"58px",width:"125px",fontSize:"18px"}}>Sarah West</h4>
                        <img src="src\assets\icon\action\visibility_24px_outlined.png" alt="" style={{width:"18px", height:"18px",position:"absolute",top:"12px",left:"475px"}}/>
                        <h6 style={{width:"69px", height:"18px",position:"absolute",top:"12px",left:"501px",fontSize:"14px"}}>1.4k views</h6>
                        <i className="bi bi-share-fill" style={{width:"42px", height:"36px",position:"absolute",top:"12px",left:"610px",borderRadius:"2px"}}></i>
                    </div>
                </div>
                <div style={{position:"absolute",top:"994px", border:"1px solid #C4C4C4"}}>
                    <img src="src\assets\Rectangle 7.png" alt="" style={{height:"220px",borderRadius:"4px 4px 0 0" }} />
                    <h4 style={{position:"absolute",top:"240px",left:"20px"}}>🗓️ Meetup</h4>
                    <div style={{position:"absolute", top:"290px", left:"20px", display:"flex"}}>
                        <h1 style={{fontSize:"22px", width:"600px"}} >Finance & Investment Elite Social Mixer @Lujiazui</h1>
                        <img src="src\assets\Group 3.png" alt="" style={{width:"28px", height:"28px"}} />
                    </div>
                    <img src="src\assets\Group 53.png" alt="" style={{position:"absolute", top:"330px", left:"20px"}} />
                    <a href="#" className='visit' style={{border:"1px solid #A9AEB8 ",width:"652px", height:"38px",borderRadius:"8px", textAlign:"center",alignItems:"center", textDecoration:"none" ,position:"absolute",top:"360px",left:"20px"}}>Visit Website</a>
                    <div style={{position:"absolute",top:"404px",left:"20px", display:"flex"}}>
                        <img src="src\assets\Rectangle 3 (3).png" alt="" />
                        <h4 style={{position:"absolute",top:"12px",left:"58px",width:"125px",fontSize:"18px"}}>Ronal Jones</h4>
                        <img src="src\assets\icon\action\visibility_24px_outlined.png" alt="" style={{width:"18px", height:"18px",position:"absolute",top:"12px",left:"475px"}}/>
                        <h6 style={{width:"69px", height:"18px",position:"absolute",top:"12px",left:"501px",fontSize:"14px"}}>1.4k views</h6>
                        <i className="bi bi-share-fill" style={{width:"42px", height:"36px",position:"absolute",top:"12px",left:"610px",borderRadius:"2px"}}></i>
                    </div>
                </div>
                <div style={{position:"absolute",top:"1500px", border:"1px solid #C4C4C4"}}>
                    <h4 style={{position:"absolute",left:"20px",width :"60px",fontSize:"18px"}}>💼️ Job</h4>
                    <div style={{position:"absolute", top:"50px", left:"20px", display:"flex"}}>
                        <h1 style={{fontSize:"22px", width:"600px"}} >Software Developer</h1>
                        <img src="src\assets\Group 3.png" alt="" style={{width:"28px", height:"28px"}} />
                    </div>
                    <img src="src\assets\Group 54.png" alt="" style={{position:"absolute", top:"90px", left:"20px"}} />
                    <a href="#" className='visit' style={{border:"1px solid #A9AEB8 ",width:"652px", height:"38px",borderRadius:"8px", textAlign:"center",alignItems:"center", textDecoration:"none" ,position:"absolute",top:"120px",left:"20px"}}>Apply on Timesjobs</a>
                    <div style={{position:"absolute",top:"166px",left:"20px", display:"flex"}}>
                        <img src="src\assets\Rectangle 3 (4).png" alt="" />
                        <h4 style={{position:"absolute",top:"12px",left:"58px",width:"125px",fontSize:"18px"}}>Joseph Gray</h4>
                        <img src="src\assets\icon\action\visibility_24px_outlined.png" alt="" style={{width:"18px", height:"18px",position:"absolute",top:"12px",left:"475px"}}/>
                        <h6 style={{width:"69px", height:"18px",position:"absolute",top:"12px",left:"501px",fontSize:"14px"}}>1.4k views</h6>
                        <i className="bi bi-share-fill" style={{width:"42px", height:"36px",position:"absolute",top:"12px",left:"610px",borderRadius:"2px"}}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main