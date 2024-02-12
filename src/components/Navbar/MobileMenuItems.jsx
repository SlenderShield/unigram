import { useState } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";

function MobileMenuItems({ items, depthLevel, showMenu, setShowMenu }) {
    const [dropdown, setDropdown] = useState(false);

    const closeDropdown = () => {
        dropdown && setDropdown(false);
        showMenu && setShowMenu(false);
    };
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdown((prev) => !prev);
    };
    const arrow = "after:inline-block after:content-[''] after:ml-1 after:border-t-8 after:border-r-4 after:border-l-4 after:border-x-transparent after:border-y-black"

    const arrow_close = "after:inline-block after:content-[''] after:ml-1 after:border-b-8 after:border-r-4 after:border-l-4 after:border-x-transparent after:border-y-black"

    return (
        <li className="relative text-[14px]" onClick={closeDropdown}>
            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        className="flex items-center"
                    >
                        <Link to={items.url} onClick={closeDropdown} className="block">
                            {items.title}
                        </Link>
                        <div onClick={(e) => toggleDropdown(e)} className="ml-2">
                            {dropdown ? <span className={arrow_close} /> : <span className={arrow} />}
                        </div>
                    </button>
                    <MobileDropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        className="flex items-center"
                    >
                        {items.title}{" "}
                        <div onClick={(e) => toggleDropdown(e)} className="ml-2">
                            {dropdown ? <span className={arrow_close} /> : <span className={arrow} />}
                        </div>
                    </button>
                    <MobileDropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <Link to={items.url} className="block">
                    {items.title}
                </Link>
            )}

        </li>
    );
}

export default MobileMenuItems;
