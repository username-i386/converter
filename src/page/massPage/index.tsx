import { Center, Heading, Icon, Input, InputGroup, InputRightElement, Select, Stack, Text } from "@chakra-ui/react"
// import './index.css'
import { useState } from "react"
import { FaEquals } from 'react-icons/fa';
import { RiScales2Fill } from 'react-icons/ri';

export const MassPage = () => {

   const [inputNumber, setInputNumber] = useState<string | undefined>('');
   const [outputNumber, setOutputNumber] = useState<string | undefined>('');

   function converter(event: React.FormEvent<HTMLInputElement>) {
      
      const target = event.target as HTMLInputElement;
      
      const inputNumberValue = (document.querySelector('#inputNumber') as HTMLInputElement).value;
      const outputNumberValue = (document.querySelector('#outputNumber') as HTMLInputElement).value;

      const convertFromUnit = (document.querySelector('#convertFromSelect') as HTMLSelectElement).value;
      const convertToUnit = (document.querySelector('#convertToSelect') as HTMLSelectElement).value;

      let convertedValue = 1;

      switch (target.id) {
         case 'inputNumber':
            setInputNumber(inputNumberValue);
            if (inputNumberValue === '') {
               setOutputNumber('');
            } else {
               convertedValue = convertFromLeftToRight(convertFromUnit, +inputNumberValue, convertToUnit, convertedValue)
               setOutputNumber(String(convertedValue));
            }
            break;
         case 'outputNumber':
            setOutputNumber(outputNumberValue);
            if (outputNumberValue === '') {
               setInputNumber('');
            } else {
               convertedValue = convertFromRightToLeft(convertToUnit, +outputNumberValue, convertFromUnit, convertedValue)
               setInputNumber(String(convertedValue));
            }
            break;
         default:
            break;
      }
   } 

   function convertFromLeftToRight(convertFromUnit: string, inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case 'c':
            result = convertFromCelsius(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'f':
            result = convertFromFahrenheit(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'k':
            result = convertFromKelvin(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'ran':
            result = convertFromRankin(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'd':
            result = convertFromDelil(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'n':
            result = convertFromNuton(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'reo':
            result = convertFromReomur(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'rem':
            result = convertFromRemer(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromRightToLeft(convertFromUnit: string, outputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case 'c':
            result = convertFromCelsius(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'f':
            result = convertFromFahrenheit(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'k':
            result = convertFromKelvin(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'ran':
            result = convertFromRankin(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'd':
            result = convertFromDelil(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'n':
            result = convertFromNuton(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'reo':
            result = convertFromReomur(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case 'rem':
            result = convertFromRemer(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromCelsius(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case 'c':
            convertedValue = +inputNumberValue;
            return convertedValue;
         case 'f':
            convertedValue = Number((+inputNumberValue * 9 / 5) + 32);
            return convertedValue;
         case 'k':
            convertedValue = Number(+inputNumberValue + 273.15);
            return convertedValue;
         case 'ran':
            convertedValue = Number((+inputNumberValue * 1.8) + 491.67);
            return convertedValue;
         case 'd':
            convertedValue = Number((+inputNumberValue * 1.5) - 100);
            return convertedValue;
         case 'n':
            convertedValue = Number(+inputNumberValue * 0.33);
            return convertedValue;
         case 'reo':
            convertedValue = Number(+inputNumberValue * 0.8);
            return convertedValue;
         case 'rem':
            convertedValue = Number((+inputNumberValue * 0.525) + 7.5);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromFahrenheit(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 32;
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue / 1.8;
            return convertedValue;
         case 'f':
            convertedValue = inputNumberValue + 32;
            return convertedValue;
         case 'k':
            convertedValue = (inputNumberValue / 1.8) + 273.15;
            return convertedValue;
         case 'ran':
            convertedValue = inputNumberValue + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = (inputNumberValue * 0.83333) - 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue * 0.1833;
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue * 0.4444;
            return convertedValue;
         case 'rem':
            convertedValue = (inputNumberValue * 0.29167) - 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromKelvin(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 273.15;
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue;
            return convertedValue;
         case 'f':
            convertedValue = (inputNumberValue * 1.8) + 32;
            return convertedValue;
         case 'k':
            convertedValue = inputNumberValue + 273;
            return convertedValue;
         case 'ran':
            convertedValue = (inputNumberValue * 1.8) + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = (inputNumberValue * 1.5) - 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue * 0.33;
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue * 0.8;
            return convertedValue;
         case 'rem':
            convertedValue = (inputNumberValue * 0.525) + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromRankin(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 491.67;
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue / 1.8;
            return convertedValue;
         case 'f':
            convertedValue = inputNumberValue + 32;
            return convertedValue;
         case 'k':
            convertedValue = inputNumberValue / 1.8 + 273.15;
            return convertedValue;
         case 'ran':
            convertedValue = inputNumberValue + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = (inputNumberValue * 0.83333) - 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue * 0.18333;
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue * 0.44444;
            return convertedValue;
         case 'rem':
            convertedValue = (inputNumberValue * 0.29167) + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromDelil(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue += 100;
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue / 1.5;
            return convertedValue;
         case 'f':
            convertedValue = inputNumberValue * 1.2 + 32;
            return convertedValue;
         case 'k':
            convertedValue = inputNumberValue / 1.5 + 273.15;
            return convertedValue;
         case 'ran':
            convertedValue = inputNumberValue + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = inputNumberValue + 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue * 0.22;
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue * 0.53333;
            return convertedValue;
         case 'rem':
            convertedValue = (inputNumberValue * 0.35) + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromNuton(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue / 0.33;
            return convertedValue;
         case 'f':
            convertedValue = inputNumberValue * 5.4545 + 32;
            return convertedValue;
         case 'k':
            convertedValue = inputNumberValue / 0.33 + 273.15;
            return convertedValue;
         case 'ran':
            convertedValue = inputNumberValue * 5.4545 + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = inputNumberValue * 4.5455 - 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue * 2.4242;
            return convertedValue;
         case 'rem':
            convertedValue = inputNumberValue * 1.5909 + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromReomur(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue / 0.8;
            return convertedValue;
         case 'f':
            convertedValue = inputNumberValue * 2.25 + 32;
            return convertedValue;
         case 'k':
            convertedValue = inputNumberValue / 0.8 + 273.15;
            return convertedValue;
         case 'ran':
            convertedValue = inputNumberValue * 2.25 + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = inputNumberValue * 1.875 - 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue * 0.4125;
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue;
            return convertedValue;
         case 'rem':
            convertedValue = inputNumberValue * 0.65625 + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromRemer(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 7.5;
      switch (convertToUnit) {
         case 'c':
            convertedValue = inputNumberValue / 0.525;
            return convertedValue;
         case 'f':
            convertedValue = inputNumberValue * 3.4286 + 32;
            return convertedValue;
         case 'k':
            convertedValue = inputNumberValue / 0.525 + 273.15;
            return convertedValue;
         case 'ran':
            convertedValue = inputNumberValue * 3.4286 + 491.67;
            return convertedValue;
         case 'd':
            convertedValue = inputNumberValue * 2.8571 - 100;
            return convertedValue;
         case 'n':
            convertedValue = inputNumberValue * 0.62857;
            return convertedValue;
         case 'reo':
            convertedValue = inputNumberValue * 1.5238;
            return convertedValue;
         case 'rem':
            convertedValue += 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   return (
      <div>
         <Center>
            <Stack direction={"row"} align={'center'} spacing={6} >
               <Heading className="title" as='h1' size='lg'>Вес и масса</Heading>
               <Icon as={RiScales2Fill} boxSize={8} />
            </Stack>
         </Center>
         <div className="converter">
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='0' 
                  type="number" 
                  id="inputNumber" 
                  value={inputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertFromSelect" defaultValue={'c'} >
                  <option value='c'>градусов по Цельсию</option>
                  <option value='f'>градусов по Фаренгейту</option>
                  <option value='k'>градусов по Кельвину</option>
                  <option value='ran'>градусов по Ранкину</option>
                  <option value='d'>градусов по Делилю</option>
                  <option value='n'>градусов по Ньютону</option>
                  <option value='reo'>градусов по Реомюру</option>
                  <option value='rem'>градусов по Рёмеру</option>
               </Select>
            </Stack>
            <Icon as={FaEquals} boxSize={6} />
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder="32"
                  type="number" 
                  id="outputNumber" 
                  value={outputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertToSelect" defaultValue={'f'}>
                  <option value='c'>градусов по Цельсию</option>
                  <option value='f'>градусов по Фаренгейту</option>
                  <option value='k'>градусов по Кельвину</option>
                  <option value='ran'>градусов по Ранкину</option>
                  <option value='d'>градусов по Делилю</option>
                  <option value='n'>градусов по Ньютону</option>
                  <option value='reo'>градусов по Реомюру</option>
                  <option value='rem'>градусов по Рёмеру</option>
               </Select>
            </Stack>
         </div>
      </div>
   )
}