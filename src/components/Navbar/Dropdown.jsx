
import MenuItems from './MenuItems'

function Dropdown({ submenus, dropdown, depthLevel }) {
    depthLevel = depthLevel + 1;

    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems key={index} items={submenu} depthLevel={depthLevel} />
            ))}
        </ul>
    )
}

export default Dropdown