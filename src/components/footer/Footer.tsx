import { Divider, Heading, Highlight, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { BsTelegram } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiChakraui } from 'react-icons/si'
import '../../../public/react-router.svg'
import { ReactRouterIcon } from './ReactRouterIcon'

export const Footer = () => {
   return (
      <footer className="footer">
         <Divider margin={'15px'} />
         <Stack spacing={4} align={'center'}>
            <Heading size='md'>ATHENA</Heading>
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
               <Link href="https://github.com/username-i386">
                  <Icon as={AiFillGithub} boxSize={7} />
               </Link>
               {/* <Link href="#">
                  <Icon as={GrMail} boxSize={7} />
               </Link>
               <Link href="#">
                  <Icon as={BsTelegram} boxSize={7} />
               </Link> */}
            </Stack>
         </Stack>
         <Divider margin={'5px'} />
         <Stack align={'center'}>
            <Text align={'center'}>Используемые технологиии:</Text>
            <Stack direction={'row'} spacing={6} align={'end'} justify={'center'} wrap={'wrap'}>
               <Stack>
                  <Stack align={'center'}>
                     <Icon as={FaReact} boxSize={6} color='#61dafb' />
                     <Text>React</Text>
                  </Stack>
                  <Stack align={'center'}>
                     <ReactRouterIcon boxSize={6} />
                     <Text>React Router</Text>
                  </Stack>
               </Stack>
               <Stack>
                  <Stack align={'center'}>
                     <Icon as={BiLogoTypescript} boxSize={6} color='#3178C6' />
                     <Text>Typescript</Text>
                  </Stack>
                  <Stack align={'center'}>
                     <Icon as={SiChakraui} boxSize={6} color='#81E6D9' />
                     <Text>Chakra UI</Text>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>
      </footer>
   )
}