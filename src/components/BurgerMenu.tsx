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
               <Link to=''>
                  <MenuItem icon={<FaTemperatureLow />}>
                     Температура
                  </MenuItem>
               </Link>
               <Link to='mass'>
                  <MenuItem icon={<RiScales2Fill />}>
                     Вес и масса
                  </MenuItem>
               </Link>
               <Link to='volume'>
                  <MenuItem icon={<BiSolidFlask />}>
                     Объем
                  </MenuItem>
               </Link>
               <Link to='square'>
                  <MenuItem icon={<TfiRulerAlt2 />}>
                     Площадь
                  </MenuItem>
               </Link>
               <Link to='speed'>
                  <MenuItem icon={<BsSpeedometer />}>
                     Скорость бега
                  </MenuItem>
               </Link>
            </MenuList>
         </Menu>
      </>
   )
}