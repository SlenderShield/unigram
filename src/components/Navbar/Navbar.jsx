import { menuItemsData } from '../../menuItemsData';
import SubMenu from './SubMenu';

const NavbarComp = ({ mobileView }) => {
  return (
    <ul className='mt-2 mb-4 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      {menuItemsData.map((item, index) => (
        <SubMenu {...item} key={index} placement="bottom" />
      ))}
    </ul>
  );
};

export default NavbarComp