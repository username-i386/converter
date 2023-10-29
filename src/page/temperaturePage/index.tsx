import { Input, Select, Stack, Text } from "@chakra-ui/react"
import './index.css'

export const TemperaturePage = () => {
   return (
      <div className="converter">
         <Stack className="inputNumber" spacing={5} direction={"column"}>
            <Input placeholder='Введите число' type="number" />
            <Select placeholder='Select option'>
               <option value='option1'>Option 1</option>
               <option value='option2'>Option 2</option>
               <option value='option3'>Option 3</option>
            </Select>
         </Stack>
         <Stack className="inputNumber" spacing={5} direction={"column"}>
            <Text fontSize='xl'>(6xl) In love with React & Next</Text>
            <Select placeholder='Select option'>
               <option value='option1'>Option 1</option>
               <option value='option2'>Option 2</option>
               <option value='option3'>Option 3</option>
            </Select>
         </Stack>
         
      </div>
   )
}