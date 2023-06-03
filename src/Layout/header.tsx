import { useEffect } from "react";
import { useTheme } from "../Context/theme-context";

function Header() {
    const {toggle , setToggle} = useTheme();

    useEffect(()=>{
        console.log("Check the toggle value : " , toggle)
    },[toggle])

    return (
        <header data-bs-theme="dark" className={`${ toggle ? "body-pd" : ""} header`} id="header">
        <div className="header_toggle">
          {" "}
          <i className="bi bi-list" onClick={()=>setToggle(!toggle)}></i>
        </div>
        <div className="header_img">
          {" "}
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
        </div>
      </header>
    );
  }
  
  export default Header;
  