import { Outlet } from "react-router-dom";
import Header from "../components/Header"
// import { NavbarSimple } from "../components/Navbar/Navbar"
import Footer from "../components/Footer"

function Root() {
    return (
        <>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Root