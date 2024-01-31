import './Header.css'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { BurgerMenu } from './BurgerMenu'
import { useMediaQuery } from '@chakra-ui/react'

export const Header = () => {

   const [isSmallerThan450] = useMediaQuery('(max-width: 450px)');

   return (
      <header className='header'>
         <Link to='/about_us'>
            <Logo />
         </Link>
         <div>
            {
               isSmallerThan450 ? <BurgerMenu /> : <Menu />
            }
         </div>
      </header>
   )
}