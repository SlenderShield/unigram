import { Outlet } from "react-router-dom";
import Header from "../components/Header"
// import { NavbarSimple } from "../components/Navbar/Navbar"
import Footer from "../components/Footer"

function Root() {
    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root