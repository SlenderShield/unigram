import { useState, forwardRef } from "react";
import { Link } from 'react-router-dom';
import {
    Typography,
    Menu,
    MenuHandler,
    ListItem,
    MenuList,
} from '@material-tailwind/react';
import {
    ChevronDownIcon,
} from "@heroicons/react/24/solid";

const SubMenu = forwardRef(({ title, url, submenu, placement, mobileView }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleView = () => setIsMobile(mobileView);

    return (
        <Menu ref={ref} open={isMenuOpen} handler={setIsMenuOpen} placement={`${isMobile ? "bottom-start" : placement}`} allowHover>
            {url && submenu ? (
                <>
                    <MenuHandler>
                        <Typography as='div' variant='small' className='font-medium'>
                            <ListItem className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'>
                                <Link to={url} className='block text-inherit decoration-inherit'>
                                    {title}</Link>
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                                />
                            </ListItem>
                        </Typography>
                    </MenuHandler>
                    <MenuList className='p-1'>
                        {submenu.map((item, index) => (
                            <SubMenu {...item} key={index} placement="right-start" />
                        ))}
                    </MenuList>
                </>
            ) : !url && submenu ? (
                <>
                    <MenuHandler>
                        <Typography as='div' variant='small' className='font-medium' onClick={toggleMenu}>
                            <ListItem className='flex items-center gap-2 py-2 pr-4 font-black text-gray-900'>
                                <Link to={url} className='block text-inherit decoration-inherit'>
                                    {title}
                                </Link>
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                                />
                            </ListItem>
                        </Typography>
                    </MenuHandler>
                    <MenuList className='p-1'>
                        {submenu.map((item, index) => (
                            <SubMenu {...item} key={index} placement="right-start" />
                        ))}
                    </MenuList>
                </>
            ) : (
                <ListItem className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'>
                    <Link to={url} className='block text-inherit decoration-inherit'>
                        {title}
                    </Link>
                </ListItem>
            )}
        </Menu>
    );
});

export default SubMenu