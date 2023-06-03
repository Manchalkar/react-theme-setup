import { useEffect, useLayoutEffect } from "react";
import { useTheme } from "../Context/theme-context";

function Header() {
  const { toggle, setToggle ,isDarkMode , setDarkMode } = useTheme();

  useLayoutEffect(() => {
    if(!isDarkMode){
        document.documentElement.setAttribute('data-bs-theme','light')
    }else{
        document.documentElement.setAttribute('data-bs-theme','dark')
    }   
  }, [isDarkMode]);

  return (
    <header className={`${toggle ? "body-pd" : ""} header`} id="header">
      <div className="header_toggle">
        {" "}
        <i className="bi bi-list" onClick={() => setToggle(!toggle)}></i>
      </div>
      <div>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              
              onClick={()=>setDarkMode(true)}
              
            />{" "}
            Dark Mode
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={()=>setDarkMode(false)}
            />{" "}
            Light Mode
          </label>
        </div>
      </div>
      <div className="header_img">
        {" "}
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
      </div>
    </header>
  );
}

export default Header;
