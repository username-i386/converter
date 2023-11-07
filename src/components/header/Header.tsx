import { Button, Heading, Icon, Stack } from '@chakra-ui/react'
import { HiOutlineScale } from 'react-icons/hi'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
   return (
      <header className='header'>
         <div className='logo'>
            <Heading>ATHENA</Heading>
            <Icon as={HiOutlineScale} boxSize={10} />
         </div>
         <div>
            <Stack direction='row' spacing={3} align='center'>
               <Link to=''>
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