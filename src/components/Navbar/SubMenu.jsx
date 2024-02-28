import { useState, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Menu, MenuHandler, ListItem, MenuList } from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const SubMenu = forwardRef(({ title, url, submenu, placement }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Menu
            ref={ref}
            open={isMenuOpen}
            handler={setIsMenuOpen}
            placement={`${isMobile ? 'bottom-start' : placement}`}
            allowHover
        >
            {url && submenu ? (
                <>
                    <MenuHandler>
                        <Typography as='div' variant='paragraph'>
                            <ListItem className='flex items-center gap-2 py-2 pr-4 text-white active:bg-[#ECB602] focus::bg-[#ECB602] hover:bg-[#ECB602]'>
                                <Link to={url} className='block text-inherit decoration-inherit '>
                                    {title}
                                </Link>
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                                />
                            </ListItem>
                        </Typography>
                    </MenuHandler>
                    <MenuList className='p-1 bg-[#55185D]'>
                        {submenu.map((item, index) => (
                            <SubMenu {...item} key={index} placement='right-start' />
                        ))}
                    </MenuList>
                </>
            ) : !url && submenu ? (
                <>
                    <MenuHandler className='bg-[#55185D]'>
                        <Typography as='div' variant='paragraph' onClick={toggleMenu}>
                            <ListItem className='flex items-center gap-2 py-2 pr-4 font-black text-white'>
                                <Link to={url} className='block text-inherit decoration-inherit '>
                                    {title}
                                </Link>
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3 w-3 transition-transform  ${isMenuOpen ? 'rotate-180' : ''}`}
                                />
                            </ListItem>
                        </Typography>
                    </MenuHandler>
                    <MenuList className='p-1 bg-[#55185D]'>
                        {submenu.map((item, index) => (
                            <SubMenu {...item} key={index} placement='right-start' />
                        ))}
                    </MenuList>
                </>
            ) : (
                <Typography as='div' variant='paragraph' >
                    <ListItem className='flex items-center gap-2 py-2 pr-5  text-white active:bg-[#ECB602] focus::bg-[#ECB602] hover:bg-[#ECB602]'>
                        <Link to={url} className='block text-inherit decoration-inherit  '>
                            {title}
                        </Link>
                    </ListItem>
                </Typography>
            )}
        </Menu>
    );
});

export default SubMenu;
