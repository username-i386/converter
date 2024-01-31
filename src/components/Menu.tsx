import { Button, Stack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'


export const Menu = () => {
   return (
      <Stack direction='row' spacing={3} align='center' justify={'center'} wrap={'wrap'}>
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
   )
}