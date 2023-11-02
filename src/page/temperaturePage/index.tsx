import { Center, Heading, Icon, Input, InputGroup, InputRightElement, Select, Stack, Text } from "@chakra-ui/react"
import './index.css'
import { useState } from "react"
import { FaTemperatureLow, FaEquals } from 'react-icons/fa';

export const TemperaturePage = () => {

   const [inputNumber, setInputNumber] = useState<string | undefined>('');
   const [outputNumber, setOutputNumber] = useState<string | undefined>('');

   const DEGREES_CELSIUS = 'DEGREES_CELSIUS';
   const DEGREES_FAHRENHEIT = 'DEGREES_FAHRENHEIT';
   const DEGREES_KELVIN = 'DEGREES_KELVIN';
   const DEGREES_RANKIN = 'DEGREES_RANKIN';
   const DEGREES_DELIL = 'DEGREES_DELIL';
   const DEGREES_NUTON = 'DEGREES_NUTON';
   const DEGREES_REOMUR = 'DEGREES_REOMUR';
   const DEGREES_REMER = 'DEGREES_REMER';

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
               convertedValue = convertFromLeftToRight(convertFromUnit, +inputNumberValue, convertToUnit, convertedValue);
               setOutputNumber(String(convertedValue));
            }
            break;
         case 'outputNumber':
            setOutputNumber(outputNumberValue);
            if (outputNumberValue === '') {
               setInputNumber('');
            } else {
               convertedValue = convertFromRightToLeft(convertToUnit, +outputNumberValue, convertFromUnit, convertedValue);
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
         case DEGREES_CELSIUS:
            result = convertFromCelsius(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_FAHRENHEIT:
            result = convertFromFahrenheit(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_KELVIN:
            result = convertFromKelvin(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_RANKIN:
            result = convertFromRankin(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_DELIL:
            result = convertFromDelil(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_NUTON:
            result = convertFromNuton(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_REOMUR:
            result = convertFromReomur(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_REMER:
            result = convertFromRemer(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromRightToLeft(convertFromUnit: string, outputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case DEGREES_CELSIUS:
            result = convertFromCelsius(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_FAHRENHEIT:
            result = convertFromFahrenheit(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_KELVIN:
            result = convertFromKelvin(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_RANKIN:
            result = convertFromRankin(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_DELIL:
            result = convertFromDelil(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_NUTON:
            result = convertFromNuton(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_REOMUR:
            result = convertFromReomur(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case DEGREES_REMER:
            result = convertFromRemer(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromCelsius(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = Number((+inputNumberValue * 9 / 5) + 32);
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = Number(+inputNumberValue + 273.15);
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = Number((+inputNumberValue * 1.8) + 491.67);
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = Number((+inputNumberValue * 1.5) - 100);
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = Number(+inputNumberValue * 0.33);
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = Number(+inputNumberValue * 0.8);
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = Number((+inputNumberValue * 0.525) + 7.5);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromFahrenheit(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 32;
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue / 1.8;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = inputNumberValue + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = (inputNumberValue / 1.8) + 273.15;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = inputNumberValue + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = (inputNumberValue * 0.83333) - 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue * 0.1833;
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue * 0.4444;
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = (inputNumberValue * 0.29167) - 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromKelvin(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 273.15;
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = (inputNumberValue * 1.8) + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = inputNumberValue + 273;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = (inputNumberValue * 1.8) + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = (inputNumberValue * 1.5) - 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue * 0.33;
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue * 0.8;
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = (inputNumberValue * 0.525) + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromRankin(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 491.67;
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue / 1.8;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = inputNumberValue + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = inputNumberValue / 1.8 + 273.15;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = inputNumberValue + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = (inputNumberValue * 0.83333) - 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue * 0.18333;
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue * 0.44444;
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = (inputNumberValue * 0.29167) + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromDelil(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue += 100;
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue / 1.5;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = inputNumberValue * 1.2 + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = inputNumberValue / 1.5 + 273.15;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = inputNumberValue + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = inputNumberValue + 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue * 0.22;
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue * 0.53333;
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = (inputNumberValue * 0.35) + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromNuton(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue / 0.33;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = inputNumberValue * 5.4545 + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = inputNumberValue / 0.33 + 273.15;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = inputNumberValue * 5.4545 + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = inputNumberValue * 4.5455 - 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue * 2.4242;
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = inputNumberValue * 1.5909 + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromReomur(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue / 0.8;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = inputNumberValue * 2.25 + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = inputNumberValue / 0.8 + 273.15;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = inputNumberValue * 2.25 + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = inputNumberValue * 1.875 - 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue * 0.4125;
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue;
            return convertedValue;
         case DEGREES_REMER:
            convertedValue = inputNumberValue * 0.65625 + 7.5;
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromRemer(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      inputNumberValue -= 7.5;
      switch (convertToUnit) {
         case DEGREES_CELSIUS:
            convertedValue = inputNumberValue / 0.525;
            return convertedValue;
         case DEGREES_FAHRENHEIT:
            convertedValue = inputNumberValue * 3.4286 + 32;
            return convertedValue;
         case DEGREES_KELVIN:
            convertedValue = inputNumberValue / 0.525 + 273.15;
            return convertedValue;
         case DEGREES_RANKIN:
            convertedValue = inputNumberValue * 3.4286 + 491.67;
            return convertedValue;
         case DEGREES_DELIL:
            convertedValue = inputNumberValue * 2.8571 - 100;
            return convertedValue;
         case DEGREES_NUTON:
            convertedValue = inputNumberValue * 0.62857;
            return convertedValue;
         case DEGREES_REOMUR:
            convertedValue = inputNumberValue * 1.5238;
            return convertedValue;
         case DEGREES_REMER:
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
               <Heading className="title" as='h1' size='lg'>Температура</Heading>
               <Icon as={FaTemperatureLow} boxSize={8} />
            </Stack>
         </Center>
         <div className="converter">
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="inputNumber" 
                  value={inputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertFromSelect" defaultValue={DEGREES_CELSIUS} >
                  <option value={DEGREES_CELSIUS}>градусов по Цельсию</option>
                  <option value={DEGREES_FAHRENHEIT}>градусов по Фаренгейту</option>
                  <option value={DEGREES_KELVIN}>градусов по Кельвину</option>
                  <option value={DEGREES_RANKIN}>градусов по Ранкину</option>
                  <option value={DEGREES_DELIL}>градусов по Делилю</option>
                  <option value={DEGREES_NUTON}>градусов по Ньютону</option>
                  <option value={DEGREES_REOMUR}>градусов по Реомюру</option>
                  <option value={DEGREES_REMER}>градусов по Рёмеру</option>
               </Select>
            </Stack>
            <Icon as={FaEquals} boxSize={6} />
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="outputNumber" 
                  value={outputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertToSelect" defaultValue={DEGREES_FAHRENHEIT}>
                  <option value={DEGREES_CELSIUS}>градусов по Цельсию</option>
                  <option value={DEGREES_FAHRENHEIT}>градусов по Фаренгейту</option>
                  <option value={DEGREES_KELVIN}>градусов по Кельвину</option>
                  <option value={DEGREES_RANKIN}>градусов по Ранкину</option>
                  <option value={DEGREES_DELIL}>градусов по Делилю</option>
                  <option value={DEGREES_NUTON}>градусов по Ньютону</option>
                  <option value={DEGREES_REOMUR}>градусов по Реомюру</option>
                  <option value={DEGREES_REMER}>градусов по Рёмеру</option>
               </Select>
            </Stack>
         </div>
      </div>
   )
}