import { menuItemsData } from "../../menuItemsData";
import MenuItems from "./MenuItems";

const Navbar = () => {

    const depthLevel = 0;
    return (
        <nav className="desktop-nav hidden lg:block">
            <ul className="flex items-center flex-wrap list-none">
                {menuItemsData.map((menu, index) => {
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                })}
            </ul>
        </nav>
    )
};

export default Navbar;