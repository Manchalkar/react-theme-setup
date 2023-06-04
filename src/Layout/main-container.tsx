import { ThemeProvider } from "../Context/theme-context";
import Header from "./header";
import SideBar from "./sidebar";

function MainLayout() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <SideBar></SideBar>
        <div className="">
          <div className="container-fluid text-center pt-2">
            <div className="row">
              <div className="col-md-6 mf-program">
                <div className="mb-2 ">

                </div>
                <div className="mb-2 "></div>
                <div className="mb-2 "></div>
              </div>

              <div className="col-md-6 mf-program-map">
                <div className="mb-2 "></div>
                <div className="mb-2 "></div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
