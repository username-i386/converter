import { Text, Stack, Icon, Avatar, Heading, Box, Card, CardBody, CardHeader, StackDivider } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { BsDashLg } from 'react-icons/bs'
import { AiFillExclamationCircle } from 'react-icons/ai'



export const GeneralInformation = () => {
   return (
      <div>
         <Stack direction={"row"} spacing={6} align={"center"} mb={'20px'}>
            <Avatar size='2xl'
               name='Afina Palada' 
               src='https://www.grecomap.com/images/articles/23/blog/big/129455_Athena-statue-in-the-Academy-of-Athens.jpg' />
            <Stack gap={0}>
               <Heading>Athena Pallada</Heading>
               <Text color={'gray'}>3803 y.o. / Греция, г. Олимп</Text>
               <Text m={15}>
                  "Богиня мудрости, военной стратегии и тактики,
                  одна из наиболее почитаемых богинь Древней Греции, входившая в число двенадцати великих олимпийских богов,
                  эпоним города Афины. Кроме того, богиня знаний, искусств и ремёсел, дева-воительница,
                  покровительница городов и государств, наук и мастерства, ума, сноровки, изобретательности.
                  Скромная"
               </Text>
            </Stack>
         </Stack>
         <Stack>
            <Card>
               <CardHeader>
                  <Heading size='md'>Мифы и легенды</Heading>
               </CardHeader>
               <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                     <Box>
                        <Heading size='xs' textTransform='uppercase'>
                           Миф 1
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet, praesentium facilis incidunt voluptas autem consectetur cum odit numquam modi fugiat fugit debitis ullam possimus magni libero atque. Libero, quo.
                        </Text>
                     </Box>
                     <Box>
                        <Heading size='xs' textTransform='uppercase'>
                           Миф 2
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet, praesentium facilis incidunt voluptas autem consectetur cum odit numquam modi fugiat fugit debitis ullam possimus magni libero atque. Libero, quo.
                        </Text>
                     </Box>
                     <Box>
                        <Heading size='xs' textTransform='uppercase'>
                           Миф 3
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet, praesentium facilis incidunt voluptas autem consectetur cum odit numquam modi fugiat fugit debitis ullam possimus magni libero atque. Libero, quo.
                        </Text>
                     </Box>w
                  </Stack>
               </CardBody>
            </Card>
         </Stack>
            {/* <div>
               <Icon as={BsDashLg} boxSize={10} />
            </div>
             */}
         
      </div>
   )
}