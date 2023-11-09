import { Heading, Icon, Stack } from "@chakra-ui/react"
import { HiOutlineScale } from 'react-icons/hi'


export const Logo = () => {
   return (
      <Stack direction={"column"} 
         justify={'center'}
         align={'center'} 
         m={'20px'}>
         <Heading>ATHENA</Heading>
         <Icon as={HiOutlineScale} boxSize={10} />
      </Stack>
   )
}