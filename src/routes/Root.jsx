import { Outlet } from "react-router-dom";
import Header from "../components/Header"
// import { NavbarSimple } from "../components/Navbar/Navbar"
import FooterComp from "../components/Footer"

function Root() {
    return (
        <>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <FooterComp />
        </>
    )
}

export default Root