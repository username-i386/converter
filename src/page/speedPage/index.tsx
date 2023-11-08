import { Center, Heading, Icon, Input, InputGroup, InputRightElement, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FaEquals } from 'react-icons/fa'; 
import { BsSpeedometer } from 'react-icons/bs';

export const SpeedPage = () => {

   const [inputNumber, setInputNumber] = useState<string | undefined>('');
   const [outputNumber, setOutputNumber] = useState<string | undefined>('');

   const MILES_PER_HOUR = 'MILES_PER_HOUR';
   const FEET_PER_SECOND = 'FEET_PER_SECOND';
   const METER_PER_SECOND = 'METER_PER_SECOND';
   const KILOMETER_PER_HOUR = 'KILOMETER_PER_HOUR';
   const KNOT = 'KNOT';

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
         case MILES_PER_HOUR:
            result = convertFromMilesPerHour(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case FEET_PER_SECOND:
            result = convertFromFeetPerSecond(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case METER_PER_SECOND:
            result = convertFromMeterPerSecond(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case KILOMETER_PER_HOUR:
            result = convertFromKilometerPerHour(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case KNOT:
            result = convertFromKnot(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromRightToLeft(convertFromUnit: string, outputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case MILES_PER_HOUR:
            result = convertFromMilesPerHour(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case FEET_PER_SECOND:
            result = convertFromFeetPerSecond(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case METER_PER_SECOND:
            result = convertFromMeterPerSecond(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case KILOMETER_PER_HOUR:
            result = convertFromKilometerPerHour(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case KNOT:
            result = convertFromKnot(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromMilesPerHour(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case MILES_PER_HOUR:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case FEET_PER_SECOND:
            convertedValue = Number(+inputNumberValue * 1.467);
            return convertedValue;
         case METER_PER_SECOND:
            convertedValue = Number(+inputNumberValue / 2.237);
            return convertedValue;
         case KILOMETER_PER_HOUR:
            convertedValue = Number(+inputNumberValue * 1.609);
            return convertedValue;
         case KNOT:
            convertedValue = Number(+inputNumberValue / 1.151);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromFeetPerSecond(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case MILES_PER_HOUR:
            convertedValue = Number(+inputNumberValue / 1.467);
            return convertedValue;
         case FEET_PER_SECOND:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case METER_PER_SECOND:
            convertedValue = Number(+inputNumberValue / 3.281);
            return convertedValue;
         case KILOMETER_PER_HOUR:
            convertedValue = Number(+inputNumberValue * 1.097);
            return convertedValue;
         case KNOT:
            convertedValue = Number(+inputNumberValue / 1.688);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromMeterPerSecond(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case MILES_PER_HOUR:
            convertedValue = Number(+inputNumberValue * 2.237);
            return convertedValue;
         case FEET_PER_SECOND:
            convertedValue = Number(+inputNumberValue * 3.281);
            return convertedValue;
         case METER_PER_SECOND:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case KILOMETER_PER_HOUR:
            convertedValue = Number(+inputNumberValue * 3.6);
            return convertedValue;
         case KNOT:
            convertedValue = Number(+inputNumberValue * 1.944);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromKilometerPerHour(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case MILES_PER_HOUR:
            convertedValue = Number(+inputNumberValue / 1.609);
            return convertedValue;
         case FEET_PER_SECOND:
            convertedValue = Number(+inputNumberValue / 1.097);
            return convertedValue;
         case METER_PER_SECOND:
            convertedValue = Number(+inputNumberValue / 3.6);
            return convertedValue;
         case KILOMETER_PER_HOUR:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case KNOT:
            convertedValue = Number(+inputNumberValue / 1.852);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromKnot(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case MILES_PER_HOUR:
            convertedValue = Number(+inputNumberValue * 1.151);
            return convertedValue;
         case FEET_PER_SECOND:
            convertedValue = Number(+inputNumberValue * 1.688);
            return convertedValue;
         case METER_PER_SECOND:
            convertedValue = Number(+inputNumberValue / 1.944);
            return convertedValue;
         case KILOMETER_PER_HOUR:
            convertedValue = Number(+inputNumberValue * 1.852);
            return convertedValue;
         case KNOT:
            convertedValue = +inputNumberValue;
            return convertedValue;
         default:
            return convertedValue;
      }
   }


   return (
      <div>
         <Center>
            <Stack direction={"row"} align={'center'} spacing={3} >
               <Heading className="title" as='h1' size='lg'>Скорость</Heading>
               <Icon as={BsSpeedometer} boxSize={8} />
            </Stack>
         </Center>
         <div className="converter">
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="inputNumber" 
                  value={inputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertFromSelect" defaultValue={METER_PER_SECOND}>
                  <option value={MILES_PER_HOUR}>Миль в час</option>
                  <option value={FEET_PER_SECOND}>Фут в секунду</option>
                  <option value={METER_PER_SECOND}>Метров в секунду</option>
                  <option value={KILOMETER_PER_HOUR}>Километров в час</option>
                  <option value={KNOT}>Узел</option>
               </Select>
            </Stack>
            <Icon as={FaEquals} boxSize={6} />
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="outputNumber" 
                  value={outputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertToSelect" defaultValue={KILOMETER_PER_HOUR}>
                  <option value={MILES_PER_HOUR}>Миль в час</option>
                  <option value={FEET_PER_SECOND}>Фут в секунду</option>
                  <option value={METER_PER_SECOND}>Метров в секунду</option>
                  <option value={KILOMETER_PER_HOUR}>Километров в час</option>
                  <option value={KNOT}>Узел</option>
               </Select>
            </Stack>
         </div>
      </div>
   )
}