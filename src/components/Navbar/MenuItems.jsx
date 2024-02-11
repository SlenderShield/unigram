import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function MenuItems({ items, depthLevel }) {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };
    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };
    const closeDropdown = () => {
        dropdown && setDropdown(false);
    }

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={toggleDropdown}
                    >
                        <Link to={items.url}> {items.title}</Link>
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} depthLevel={depthLevel} />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? 'true' : 'false'}>
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"></span>}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} depthLevel={depthLevel} />
                </>
            ) : (
                <Link href={items.url}>{items.title}</Link>
            )}
        </li>
    );
}

export default MenuItems;
