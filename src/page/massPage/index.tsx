import { Center, Heading, Icon, Input, InputGroup, InputRightElement, Select, Stack, Text } from "@chakra-ui/react"
// import './index.css'
import { useState } from "react"
import { FaEquals } from 'react-icons/fa';
import { RiScales2Fill } from 'react-icons/ri';

export const MassPage = () => {

   const KILOGRAMM = 'KILOGRAMM';
   const GRAMM = 'GRAMM';
   const MILLIGRAMM = 'MILLIGRAMM';
   const MIKROGRAMM = 'MIKROGRAMM';
   const FUNT = 'FUNT';
   const UNCIA = 'UNCIA';
   const TONNA = 'TONNA';
   const ENGLISH_TONNA = 'ENGLISH_TONNA';
   const AMERICAN_TONNA = 'AMERICAN_TONNA';
   const STONE = 'STONE';

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
         case KILOGRAMM:
            result = convertFromKilogram(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case GRAMM:
            result = convertFromGram(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case MILLIGRAMM:
            result = convertFromMilligram(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case MIKROGRAMM:
            result = convertFromMicrogram(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case FUNT:
            result = convertFromFunt(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case UNCIA:
            result = convertFromUncia(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case TONNA:
            result = convertFromTonna(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case ENGLISH_TONNA:
            result = convertFromEnglishTonna(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_TONNA:
            result = convertFromAmericanTonna(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case STONE:
            result = convertFromStone(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromRightToLeft(convertFromUnit: string, outputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case KILOGRAMM:
            result = convertFromKilogram(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case GRAMM:
            result = convertFromGram(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case MILLIGRAMM:
            result = convertFromMilligram(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case MIKROGRAMM:
            result = convertFromMicrogram(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case FUNT:
            result = convertFromFunt(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case UNCIA:
            result = convertFromUncia(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case TONNA:
            result = convertFromTonna(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case ENGLISH_TONNA:
            result = convertFromEnglishTonna(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_TONNA:
            result = convertFromAmericanTonna(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case STONE:
            result = convertFromStone(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromKilogram(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue / 0.001);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue / 0.000001);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue / 0.000000001);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue * 2.2046);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue * 35.274);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 1000);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 1016);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 907.2);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 6.35);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromGram(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue / 1000);
            return convertedValue;
         case GRAMM:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 1000);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 1000000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue / 453.6);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue / 28.35);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 0.000001);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number((+inputNumberValue / 1016000) + 6);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 907200);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 6350);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromMilligram(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue / 1000000);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue / 1000);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 1000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue / 453600);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue / 28350);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 1000000000);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 1016000000);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 907200000);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 6350000);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromMicrogram(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue / 1000000000);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue / 1000000);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue / 1000);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue / 453600000);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue / 28350000);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 1000000000000);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 1016000000000);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 907200000000);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 6350000000);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromFunt(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue / 2.205);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue * 453.6);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 453600);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 453600000);
            return convertedValue;
         case FUNT:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue * 16);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 2205);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 2240);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 2000);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 14);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromUncia(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue / 35.274);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue * 28.35);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 28350);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 28350000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue / 16);
            return convertedValue;
         case UNCIA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 35270);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 35840);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 32000);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 224);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromTonna(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue * 1000);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue * 1000000);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 1000000000);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 1000000000000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue * 2205);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue * 35270);
            return convertedValue;
         case TONNA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 1.016);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 1.102);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 157.5);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromEnglishTonna(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue * 1016);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue * 1016000);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 1016000000);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 1016000000000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue * 2240);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue * 35840);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue * 1.016);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 1.12);
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue / 160);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAmericanTonna(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue * 907.2);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue * 907200);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 907200000000);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 907200000000000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue * 2000);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue * 32000);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 1.102);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 1.12);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case STONE:
            convertedValue = Number(+inputNumberValue * 142.9);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromStone(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case KILOGRAMM:
            convertedValue = Number(+inputNumberValue * 6.35);
            return convertedValue;
         case GRAMM:
            convertedValue = Number(+inputNumberValue * 6350);
            return convertedValue;
         case MILLIGRAMM:
            convertedValue = Number(+inputNumberValue * 6350000);
            return convertedValue;
         case MIKROGRAMM:
            convertedValue = Number(+inputNumberValue * 6350000000);
            return convertedValue;
         case FUNT:
            convertedValue = Number(+inputNumberValue * 14);
            return convertedValue;
         case UNCIA:
            convertedValue = Number(+inputNumberValue * 224);
            return convertedValue;
         case TONNA:
            convertedValue = Number(+inputNumberValue / 157.5);
            return convertedValue;
         case ENGLISH_TONNA:
            convertedValue = Number(+inputNumberValue / 160);
            return convertedValue;
         case AMERICAN_TONNA:
            convertedValue = Number(+inputNumberValue / 142.9);
            return convertedValue;
         case STONE:
            convertedValue = +inputNumberValue;
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
               <Input placeholder='Введите число...' 
                  type="number" 
                  id="inputNumber" 
                  value={inputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertFromSelect" defaultValue={KILOGRAMM} >
                  <option value={TONNA}>Тонна</option>
                  <option value={KILOGRAMM}>Килограмм</option>
                  <option value={GRAMM}>Грамм</option>
                  <option value={MILLIGRAMM}>Милиграмм</option>
                  <option value={MIKROGRAMM}>Микрограмм</option>
                  <option value={ENGLISH_TONNA}>Английская тонна</option>
                  <option value={AMERICAN_TONNA}>Американская тонна</option>
                  <option value={STONE}>Стоун</option>
                  <option value={FUNT}>Фунт</option>
                  <option value={UNCIA}>Унция</option>
               </Select>
            </Stack>
            <Icon as={FaEquals} boxSize={6} />
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="outputNumber" 
                  value={outputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertToSelect" defaultValue={GRAMM}>
                  <option value={TONNA}>Тонна</option>
                  <option value={KILOGRAMM}>Килограмм</option>
                  <option value={GRAMM}>Грамм</option>
                  <option value={MILLIGRAMM}>Милиграмм</option>
                  <option value={MIKROGRAMM}>Микрограмм</option>
                  <option value={ENGLISH_TONNA}>Английская тонна</option>
                  <option value={AMERICAN_TONNA}>Американская тонна</option>
                  <option value={STONE}>Стоун</option>
                  <option value={FUNT}>Фунт</option>
                  <option value={UNCIA}>Унция</option>
               </Select>
            </Stack>
         </div>
      </div>
   )
}