import { Button, Heading, Icon, Stack } from '@chakra-ui/react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'

export const Header = () => {
   return (
      <header className='header'>
         <Link to='/'>
            <Logo />
         </Link>
         <div>
            <Stack direction='row' spacing={3} align='center'>
               <Link to='temperature'>
                  <Button colorScheme='purple' variant='outline'>
                     Температура
                  </Button>
               </Link>
               <Link to='mass'>
                  <Button colorScheme='green' variant='outline'>
                     Вес и масса
                  </Button>
               </Link>
               <Link to='volume'>
                  <Button colorScheme='blue' variant='outline'>
                     Объем
                  </Button>
               </Link>
               <Link to='square'>
                  <Button colorScheme='yellow' variant='outline'>
                     Площадь
                  </Button>
               </Link>
               <Link to='speed'>
                  <Button colorScheme='orange' variant='outline'>
                     Скорость бега
                  </Button>
               </Link>
            </Stack>
         </div>
      </header>
   )
}