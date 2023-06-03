import { useLayoutEffect } from "react";
import { useTheme } from "../Context/theme-context";

function SideBar() {

const {toggle , setToggle} = useTheme();


//Need to find some other way to handle it.
useLayoutEffect(() => {
    let body = document.getElementsByTagName('body')[0] as HTMLBodyElement ;
    toggle ? body.classList.add("body-pd") : body.classList.remove("body-pd")
  }, [toggle]);

  return (
    <div className={`${ toggle ? "show" : ""} l-navbar `} id="nav-bar">
      <nav className="nav">
        <div>
          {" "}
          <a href="#" className="nav_logo">
            {" "}
            <i className="bi bi-app-indicator"></i>
            <span className="nav_logo-name">BBBootstrap</span>{" "}
          </a>
          <div className="nav_list">
            {" "}
            <a href="#" className="nav_link active">
              {" "}
              <i className="bi bi-app-indicator"></i>
              <span className="nav_name">Dashboard</span>{" "}
            </a>{" "}
            <a href="#" className="nav_link">
              {" "}
              <i className="bi bi-app-indicator"></i>
              <span className="nav_name">Users</span>{" "}
            </a>{" "}
            <a href="#" className="nav_link">
              {" "}
              <i className="bi bi-app-indicator"></i>
              <span className="nav_name">Messages</span>{" "}
            </a>{" "}
            <a href="#" className="nav_link">
              {" "}
              <i className="bi bi-app-indicator"></i>
              <span className="nav_name">Bookmark</span>{" "}
            </a>{" "}
            <a href="#" className="nav_link">
              {" "}
              <i className="bi bi-app-indicator"></i>
              <span className="nav_name">Files</span>{" "}
            </a>{" "}
            <a href="#" className="nav_link">
              {" "}
              <i className="bi bi-app-indicator"></i>
              <span className="nav_name">Stats</span>{" "}
            </a>{" "}
          </div>
        </div>{" "}
        <a href="#" className="nav_link">
          {" "}
          <i className="bi bi-app-indicator"></i>
          <span className="nav_name">SignOut</span>{" "}
        </a>
      </nav>
    </div>
  );
}

export default SideBar;
