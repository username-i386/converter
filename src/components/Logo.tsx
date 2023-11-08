import { Heading, Icon } from "@chakra-ui/react"
import { HiOutlineScale } from 'react-icons/hi'


export const Logo = () => {
   return (
      <div className='logo'>
         <Heading>ATHENA</Heading>
         <Icon as={HiOutlineScale} boxSize={10} />
      </div>
   )
}