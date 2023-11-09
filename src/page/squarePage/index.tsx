import { Center, Heading, Icon, Input, InputGroup, InputRightElement, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FaEquals } from 'react-icons/fa'; 
import { TfiRulerAlt2 } from 'react-icons/tfi';

export const SquarePage = () => {

   const [inputNumber, setInputNumber] = useState<string | undefined>('');
   const [outputNumber, setOutputNumber] = useState<string | undefined>('');

   const SQUARE_KILOMETER = 'SQUARE_KILOMETER';
   const SQUARE_METER = 'SQUARE_METER';
   const SQUARE_MILE = 'SQUARE_MILE';
   const SQUARE_YARD = 'SQUARE_YARD';
   const SQUARE_FOOT = 'SQUARE_FOOT';
   const SQUARE_INCH = 'SQUARE_INCH';
   const HECTARE = 'HECTARE';
   const ACRE = 'ACRE';

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
         case SQUARE_KILOMETER:
            result = convertFromSquareKilometer(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_METER:
            result = convertFromSquareMeter(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_MILE:
            result = convertFromSquareMile(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_YARD:
            result = convertFromSquareYard(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_FOOT:
            result = convertFromSquareFoot(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_INCH:
            result = convertFromSquareInch(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case HECTARE:
            result = convertFromHectare(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case ACRE:
            result = convertFromAcre(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromRightToLeft(convertFromUnit: string, outputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case SQUARE_KILOMETER:
            result = convertFromSquareKilometer(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_METER:
            result = convertFromSquareMeter(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_MILE:
            result = convertFromSquareMile(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_YARD:
            result = convertFromSquareYard(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_FOOT:
            result = convertFromSquareFoot(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case SQUARE_INCH:
            result = convertFromSquareInch(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case HECTARE:
            result = convertFromHectare(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case ACRE:
            result = convertFromAcre(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromSquareKilometer(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue * 1000000);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 2.59);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue * 1196000);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue * 10760000);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue * 1550000000);
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue * 100);
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue * 247.1);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromSquareMeter(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue / 1000000);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 2590000);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue * 1.196);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue * 10.764);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue * 1550);
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue / 10000);
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue / 4047);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromSquareMile(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue * 2.59);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue * 2590000);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue * 3098000);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue * 2788000);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue * 4014000000);
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue * 259);
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue * 640);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromSquareYard(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue / 1196000);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue / 1.196);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 3098000);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue * 9);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue * 1296);
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue / 11960);
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue / 4840);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromSquareFoot(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue / 10760000);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue / 10.764);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 27880000);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue / 9);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue * 144);
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue / 107600);
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue / 43560);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromSquareInch(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue / 1550000000);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue / 1550);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 4014000000);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue / 1296);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue / 144);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue / 15500000);
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue / 6273000);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromHectare(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue / 100);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue * 10000);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 259);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue * 11960);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue / 107600);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue / 15500000);
            return convertedValue;
         case HECTARE:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case ACRE:
            convertedValue = Number(+inputNumberValue * 2.471);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAcre(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case SQUARE_KILOMETER:
            convertedValue = Number(+inputNumberValue / 247.1);
            return convertedValue;
         case SQUARE_METER:
            convertedValue = Number(+inputNumberValue * 4047);
            return convertedValue;
         case SQUARE_MILE:
            convertedValue = Number(+inputNumberValue / 640);
            return convertedValue;
         case SQUARE_YARD:
            convertedValue = Number(+inputNumberValue * 4840);
            return convertedValue;
         case SQUARE_FOOT:
            convertedValue = Number(+inputNumberValue / 43560);
            return convertedValue;
         case SQUARE_INCH:
            convertedValue = Number(+inputNumberValue / 6273000);
            return convertedValue;
         case HECTARE:
            convertedValue = Number(+inputNumberValue / 2.471);
            return convertedValue;
         case ACRE:
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
               <Heading className="title" as='h1' size='lg'>Площадь</Heading>
               <Icon as={TfiRulerAlt2} boxSize={8} />
            </Stack>
         </Center>
         <div className="converter">
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="inputNumber" 
                  value={inputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertFromSelect" defaultValue={SQUARE_METER}>
                  <option value={SQUARE_KILOMETER}>Квадратный километр</option>
                  <option value={SQUARE_METER}>Квадратный метер</option>
                  <option value={SQUARE_MILE}>Квдратная миля</option>
                  <option value={SQUARE_YARD}>Квадратный ярд</option>
                  <option value={SQUARE_FOOT}>Квадратный фут</option>
                  <option value={SQUARE_INCH}>Квадратный дюйм</option>
                  <option value={HECTARE}>Гектар</option>
                  <option value={ACRE}>Акр</option>
               </Select>
            </Stack>
            <Icon as={FaEquals} boxSize={6} className="equalIcon" />
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="outputNumber" 
                  value={outputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertToSelect" defaultValue={SQUARE_KILOMETER}>
                  <option value={SQUARE_KILOMETER}>Квадратный километр</option>
                  <option value={SQUARE_METER}>Квадратный метер</option>
                  <option value={SQUARE_MILE}>Квдратная миля</option>
                  <option value={SQUARE_YARD}>Квадратный ярд</option>
                  <option value={SQUARE_FOOT}>Квадратный фут</option>
                  <option value={SQUARE_INCH}>Квадратный дюйм</option>
                  <option value={HECTARE}>Гектар</option>
                  <option value={ACRE}>Акр</option>
               </Select>
            </Stack>
         </div>
      </div>
   )
}