import { Menu, MenuButton, Button, MenuList, MenuItem, Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaBurger } from "react-icons/fa6";
import { RiScales2Fill } from 'react-icons/ri';
import { BsSpeedometer } from 'react-icons/bs';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiSolidFlask } from 'react-icons/bi';


export const BurgerMenu = () => {

   return (
      <>
         <Menu>
            <MenuButton as={Button}>
               <Icon as={FaBurger} boxSize={8} />
            </MenuButton>
            <MenuList>
               <MenuItem icon={<FaTemperatureLow />}>
                  <Link to=''>Температура</Link>
               </MenuItem>
               <MenuItem icon={<RiScales2Fill />}>
                  <Link to='mass'>Вес и масса</Link>
               </MenuItem>
               <MenuItem icon={<BiSolidFlask />}>
                  <Link to='volume'>Объем</Link>
               </MenuItem>
               <MenuItem icon={<TfiRulerAlt2 />}>
                  <Link to='square'>Площадь</Link>
               </MenuItem>
               <MenuItem icon={<BsSpeedometer />}>
                  <Link to='speed'>Скорость бега</Link>
               </MenuItem>
            </MenuList>
         </Menu>
      </>
   )
}