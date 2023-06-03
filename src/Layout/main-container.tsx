import { ThemeProvider } from "../Context/theme-context";
import Header from "./header";
import SideBar from "./sidebar";

function MainLayout() {
  return (
    <>
    <ThemeProvider>
      <Header></Header>
      <SideBar></SideBar>
      <div className="height-100">
        <h4>Main Components</h4>
        <div className="container text-center">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    </ThemeProvider>
    </>
  );
}

export default MainLayout;
