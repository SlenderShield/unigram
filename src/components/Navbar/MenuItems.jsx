import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function MenuItems({ items, depthLevel }) {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    const arrow = "after:inline-block after:content-[''] after:ml-0.5 after:border-t-8 after:border-r-4 after:border-l-4 after:border-x-transparent after:border-y-black ml-1"

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
        <li className="relative text-sm text-left py-3 px-4 hover:bg-stone-200" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={toggleDropdown}
                        className='flex items-center border-0 bg-inherit cursor-pointer w-full'
                    >
                        <Link to={items.url} className='block text-inherit decoration-inherit'>{items.title}</Link>
                        {depthLevel > 0 ? <span className='mr-1'>&raquo;</span> : <span className={arrow} />}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} depthLevel={depthLevel} />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? 'true' : 'false'} className='flex items-center border-0 bg-inherit cursor-pointer w-full'>
                        {items.title}
                        {depthLevel > 0 ? <span className='mr-1'>&raquo;</span> : <span className={arrow}></span>}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} depthLevel={depthLevel} />
                </>
            ) : (
                <Link to={items.url} className='block text-inherit decoration-inherit'>{items.title}</Link>
            )}
        </li>
    );
}

export default MenuItems;
