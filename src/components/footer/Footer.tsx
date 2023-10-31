import { Divider, Heading, Highlight, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { BsTelegram } from 'react-icons/bs'
import './Footer.css'

export const Footer = () => {
   return (
      <footer className="footer">
         <Divider margin={'15px'} />
         <Stack spacing={4} align={'center'}>
            <Heading size='md'>AFINA</Heading>
            <Stack>
               <Text fontSize='md'>
                  <Highlight
                     query='Eldar Guseynov'
                     styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.100' }} >
                     Made in by Eldar Guseynov
                  </Highlight>
               </Text>
            </Stack>
            <Stack direction={'row'} spacing={3}>
               <Link href="#">
                  <Icon as={AiFillGithub} boxSize={7} />
               </Link>
               <Link href="#">
                  <Icon as={GrMail} boxSize={7} />
               </Link>
               <Link href="#">
                  <Icon as={BsTelegram} boxSize={7} />
               </Link>
            </Stack>
         </Stack>
      </footer>
   )
}