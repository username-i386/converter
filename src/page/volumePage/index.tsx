import { Center, Heading, Icon, Input, Select, Stack } from "@chakra-ui/react"
// import './index.css'
import { useState } from "react"
import { FaEquals } from 'react-icons/fa';
import { BiSolidFlask } from 'react-icons/bi';

export const VolumePage = () => {

   const AMERICAN_GALLON = 'AMERICAN_GALLON';
   const AMERICAN_LIQUID_QUART = 'AMERICAN_LIQUID_QUART';
   const AMERICAN_LIQUID_PINTA = 'AMERICAN_LIQUID_PINTA';
   const AMERICAN_CUP = 'AMERICAN_CUP';
   const AMERICAN_FLUID_OUNCE = 'AMERICAN_FLUID_OUNCE';
   const AMERICAN_TABLESPOON = 'AMERICAN_TABLESPOON';
   const AMERICAN_TEA_SPOON = 'AMERICAN_TEA_SPOON';
   const CUBIC_METER = 'CUBIC_METER';
   const LITER = 'LITER';
   const MILLILITER = 'MILLILITER';
   const IMPERIAL_GALLON = 'IMPERIAL_GALLON';
   const IMPERIAL_QUARTA = 'IMPERIAL_QUARTA';
   const IMPERIAL_PINTA = 'IMPERIAL_PINTA';
   const IMPERIAL_CUP = 'IMPERIAL_CUP';
   const IMPERIAL_FLUID_OUNCE = 'IMPERIAL_FLUID_OUNCE';
   const BRITISH_TABLESPOON = 'BRITISH_TABLESPOON';
   const BRITISH_TEA_SPOON = 'BRITISH_TEA_SPOON';
   const CUBIC_POUND = 'CUBIC_POUND';
   const CUBIC_INCH = 'CUBIC_INCH';

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
         case AMERICAN_GALLON:
            result = convertFromAmericanGallon(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_LIQUID_QUART:
            result = convertFromAmericanLiquidQuart(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_LIQUID_PINTA:
            result = convertFromAmericanLiquidPinta(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_CUP:
            result = convertFromAmericanCup(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_FLUID_OUNCE:
            result = convertFromAmericanFluidOnce(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_TABLESPOON:
            result = convertFromAmericanTablespoon(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_TEA_SPOON:
            result = convertFromAmericanTeaSpoon(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case CUBIC_METER:
            result = convertFromCubicMeter(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case LITER:
            result = convertFromLiter(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case MILLILITER:
            result = convertFromMilliliter(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_GALLON:
            result = convertFromImperialGallon(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_QUARTA:
            result = convertFromImperialQuarta(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_PINTA:
            result = convertFromImperialPinta(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_CUP:
            result = convertFromImperialCup(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_FLUID_OUNCE:
            result = convertFromImperialFluidOnce(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case BRITISH_TABLESPOON:
            result = convertFromBtitishTableSpoon(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case BRITISH_TEA_SPOON:
            result = convertFromBtitishTeaSpoon(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case CUBIC_POUND:
            result = convertFromCubicPound(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         case CUBIC_INCH:
            result = convertFromCubicInch(+inputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromRightToLeft(convertFromUnit: string, outputNumberValue: number, convertToUnit: string, convertedValue: number) {
      let result = 1;
      switch (convertFromUnit) {
         case AMERICAN_GALLON:
            result = convertFromAmericanGallon(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_LIQUID_QUART:
            result = convertFromAmericanLiquidQuart(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_LIQUID_PINTA:
            result = convertFromAmericanLiquidPinta(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_CUP:
            result = convertFromAmericanCup(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_FLUID_OUNCE:
            result = convertFromAmericanFluidOnce(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_TABLESPOON:
            result = convertFromAmericanTablespoon(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case AMERICAN_TEA_SPOON:
            result = convertFromAmericanTeaSpoon(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case CUBIC_METER:
            result = convertFromCubicMeter(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case LITER:
            result = convertFromLiter(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case MILLILITER:
            result = convertFromMilliliter(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_GALLON:
            result = convertFromImperialGallon(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_QUARTA:
            result = convertFromImperialQuarta(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_PINTA:
            result = convertFromImperialPinta(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_CUP:
            result = convertFromImperialCup(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case IMPERIAL_FLUID_OUNCE:
            result = convertFromImperialFluidOnce(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case BRITISH_TABLESPOON:
            result = convertFromBtitishTableSpoon(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case BRITISH_TEA_SPOON:
            result = convertFromBtitishTeaSpoon(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case CUBIC_POUND:
            result = convertFromCubicPound(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         case CUBIC_INCH:
            result = convertFromCubicInch(+outputNumberValue, convertToUnit, convertedValue);
            return result;
         default:
            return result;
      }
   }

   function convertFromAmericanGallon(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue * 4);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 8);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 15.773);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 128);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 256);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 756);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 264.2);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue * 3.785);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 3785);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue * 3.331);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 6.661);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 13.323);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 133.2);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 213.2);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 639.5);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 7.48);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 231);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAmericanLiquidQuart(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 4);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 2);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 3.943);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 32);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 64);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 192);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 1057);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 1.057);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 946.4);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 4.804);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 1.201);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 1.665);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 3.331);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 33.307);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 53.291);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 159.9);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 29.922);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 57.75);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAmericanLiquidPinta(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 8);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 2);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 1.972);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 16);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 32);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 96);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 2113);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 2.113);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 473.2);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 9.608);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 2.402);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 1.665);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 16.653);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 26.646);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 79.937);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 59.844);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 28.875);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAmericanCup(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 15.772);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 3.943);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 1.972);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 8.115);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 16.231);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 48.692);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 4167);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 4.167);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 240);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 18.942);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 4.736);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 2.368);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 1.184);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 8.447);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 13.515);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 40.545);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 118);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 14.646);
            return convertedValue;
         default:
            return convertedValue;
      }
   }
   
   function convertFromAmericanFluidOnce(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 128);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 32);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 16);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 8.115);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 2);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 6);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 33810);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 33.814);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 29.574);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 153.7);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 38.43);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 19.215);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 9.608);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 1.041);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1.665);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 4.996);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 957.5);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 1.805);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAmericanTablespoon(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 256);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 64);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 32);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 16.231);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 2);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 3);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 67630);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 67.628);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 14.787);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 307.4);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 76.861);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 38.43);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 19.215);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 1.922);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 1.201);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 2.498);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 1915);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue / 1.108);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromAmericanTeaSpoon(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 768);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 192);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 96);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 48.692);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 6);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 3);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 202900);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 202.9);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 4.929);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 922.3);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 230.6);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 115.3);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 57.64);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 5.765);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 3.603);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 5745);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue / 3.325);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromCubicMeter(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue * 264.2);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue * 1057);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 2113);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 4167);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 33810);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 67630);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 202900);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue * 1000);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 1000000);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue * 220);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue * 879.9);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 1760);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 3520);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 35200);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 56310);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 168900);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue * 35.315);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 61020);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromLiter(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 3.785);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue * 1.057);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 2.113);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 4.167);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 3.814);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 67.628);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 202.9);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 1000);
            return convertedValue;
         case LITER:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 1000);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue * 4.546);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue * 1.136);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 1.76);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 3.52);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 35.195);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 56.312);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 168.9);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue * 28.317);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 61.024);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromMilliliter(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 3785);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 946.4);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue / 473.2);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 240);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 29.574);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 14.787);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue / 4.929);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 1000000);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 1000);
            return convertedValue;
         case MILLILITER:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 4546);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 1137);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 568.3);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 284.1);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 28.413);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 17.758);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue / 5.919);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 28320);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue / 16.387);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromImperialGallon(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue * 4.804);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 9.608);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 18.942);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 153.7);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 307.4);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 922.3);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 220);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue * 4.546);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 4546);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue * 4);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 8);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 16);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 160);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 256);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 768);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 6.229);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 277.4);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromImperialQuarta(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 3.331);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 2.402);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 4.736);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 38.43);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 76.861);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 230.6);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 879.9);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue * 1.137);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 1137);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 4);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 2);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 4);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 40);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 64);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 192);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 24.915);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 69.355);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromImperialPinta(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 6.661);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 1.665);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 2.368);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 19.215);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 38.43);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 115.3);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 1760);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 1.76);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 568.3);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 8);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 2);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 2);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 20);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 32);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 96);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 49.831);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 34.677);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromImperialCup(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 13.323);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 3.331);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue / 1.665);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 1.184);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 9.608);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 19.215);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 57.646);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 3520);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 3.52);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 284.1);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 16);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 4);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 2);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 10);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 16);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 48);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 99.661);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 17.339);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromImperialFluidOnce(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 133.2);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 33.307);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue / 16.654);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 8.447);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 1.041);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1.922);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 5.765);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 35200);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 35.195);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 28.413);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 160);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 40);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 20);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 10);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1.6);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 4.8);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 996.6);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 1.734);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromBtitishTableSpoon(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 213.2);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 53.291);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue / 26.646);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 13.515);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 1.665);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 3.603);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 56310);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 56.312);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 17.758);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 256);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 64);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 32);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 16);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 1.6);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 3);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 1595);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 1.084);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromBtitishTeaSpoon(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 639.5);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 159.9);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue / 79.937);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 40.545);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 4.996);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 2.498);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 1.201);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 168900);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 168.9);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 5.919);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 768);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 192);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 96);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 48);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 4.8);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 3);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue / 4784);
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 2.768);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromCubicPound(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue * 7.481);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue * 29.922);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue * 59.844);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue * 118);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 957.5);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1915);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 5745);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 35.315);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue * 28.317);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 28320);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue * 6.229);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue * 24.915);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue * 49.831);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue * 99.661);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue * 996.6);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1595);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 4784);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = +inputNumberValue;
            return convertedValue;
         case CUBIC_INCH:
            convertedValue = Number(+inputNumberValue * 1728);
            return convertedValue;
         default:
            return convertedValue;
      }
   }

   function convertFromCubicInch(inputNumberValue: number, convertToUnit: string, convertedValue: number) {
      switch (convertToUnit) {
         case AMERICAN_GALLON:
            convertedValue = Number(+inputNumberValue / 231);
            return convertedValue;
         case AMERICAN_LIQUID_QUART:
            convertedValue = Number(+inputNumberValue / 57.75);
            return convertedValue;
         case AMERICAN_LIQUID_PINTA:
            convertedValue = Number(+inputNumberValue / 28.875);
            return convertedValue;
         case AMERICAN_CUP:
            convertedValue = Number(+inputNumberValue / 14.646);
            return convertedValue;
         case AMERICAN_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 1.805);
            return convertedValue;
         case AMERICAN_TABLESPOON:
            convertedValue = Number(+inputNumberValue * 1.108);
            return convertedValue;
         case AMERICAN_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 3.325);
            return convertedValue;
         case CUBIC_METER:
            convertedValue = Number(+inputNumberValue / 61020);
            return convertedValue;
         case LITER:
            convertedValue = Number(+inputNumberValue / 61.024);
            return convertedValue;
         case MILLILITER:
            convertedValue = Number(+inputNumberValue * 16.387);
            return convertedValue;
         case IMPERIAL_GALLON:
            convertedValue = Number(+inputNumberValue / 277.4);
            return convertedValue;
         case IMPERIAL_QUARTA:
            convertedValue = Number(+inputNumberValue / 69.355);
            return convertedValue;
         case IMPERIAL_PINTA:
            convertedValue = Number(+inputNumberValue / 34.677);
            return convertedValue;
         case IMPERIAL_CUP:
            convertedValue = Number(+inputNumberValue / 17.339);
            return convertedValue;
         case IMPERIAL_FLUID_OUNCE:
            convertedValue = Number(+inputNumberValue / 1.734);
            return convertedValue;
         case BRITISH_TABLESPOON:
            convertedValue = Number(+inputNumberValue / 1.084);
            return convertedValue;
         case BRITISH_TEA_SPOON:
            convertedValue = Number(+inputNumberValue * 2.768);
            return convertedValue;
         case CUBIC_POUND:
            convertedValue = Number(+inputNumberValue * 1728);
            return convertedValue;
         case CUBIC_INCH:
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
               <Heading className="title" as='h1' size='lg'>Объем</Heading>
               <Icon as={BiSolidFlask} boxSize={8} />
            </Stack>
         </Center>
         <div className="converter">
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...' 
                  type="number" 
                  id="inputNumber" 
                  value={inputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertFromSelect" defaultValue={LITER} >
                  <option value={AMERICAN_GALLON}>Американский галлон</option>
                  <option value={AMERICAN_LIQUID_QUART}>Американская жидкая кварта</option>
                  <option value={AMERICAN_LIQUID_PINTA}>Американская жидкая пинта</option>
                  <option value={AMERICAN_CUP}>Американская чашка</option>
                  <option value={AMERICAN_FLUID_OUNCE}>Американская жидкая унция</option>
                  <option value={AMERICAN_TABLESPOON}>Американская столовая ложка</option>
                  <option value={AMERICAN_TEA_SPOON}>Американская чайная ложка</option>
                  <option value={CUBIC_METER}>Кубический метр</option>
                  <option value={LITER}>Литр</option>
                  <option value={MILLILITER}>Миллилитер</option>
                  <option value={IMPERIAL_GALLON}>Имперский галлон</option>
                  <option value={IMPERIAL_PINTA}>Имперская пинта</option>
                  <option value={IMPERIAL_CUP}>Имперская чашка</option>
                  <option value={IMPERIAL_FLUID_OUNCE}>Имперская жидкая унция</option>
                  <option value={BRITISH_TABLESPOON}>Британская столовая ложка</option>
                  <option value={BRITISH_TEA_SPOON}>Британская чайная ложка</option>
                  <option value={CUBIC_POUND}>Кубический фунт</option>
                  <option value={CUBIC_INCH}>Кубический дюйм</option>
               </Select>
            </Stack>
            <Icon as={FaEquals} boxSize={6} />
            <Stack className="inputNumber" spacing={0} direction={"column"} gap={0}>
               <Input placeholder='Введите число...'
                  type="number" 
                  id="outputNumber" 
                  value={outputNumber}
                  onChange={(event) => converter(event)} />
               <Select id="convertToSelect" defaultValue={MILLILITER}>
                  <option value={AMERICAN_GALLON}>Американский галлон</option>
                  <option value={AMERICAN_LIQUID_QUART}>Американская жидкая кварта</option>
                  <option value={AMERICAN_LIQUID_PINTA}>Американская жидкая пинта</option>
                  <option value={AMERICAN_CUP}>Американская чашка</option>
                  <option value={AMERICAN_FLUID_OUNCE}>Американская жидкая унция</option>
                  <option value={AMERICAN_TABLESPOON}>Американская столовая ложка</option>
                  <option value={AMERICAN_TEA_SPOON}>Американская чайная ложка</option>
                  <option value={CUBIC_METER}>Кубический метр</option>
                  <option value={LITER}>Литр</option>
                  <option value={MILLILITER}>Миллилитер</option>
                  <option value={IMPERIAL_GALLON}>Имперский галлон</option>
                  <option value={IMPERIAL_PINTA}>Имперская пинта</option>
                  <option value={IMPERIAL_CUP}>Имперская чашка</option>
                  <option value={IMPERIAL_FLUID_OUNCE}>Имперская жидкая унция</option>
                  <option value={BRITISH_TABLESPOON}>Британская столовая ложка</option>
                  <option value={BRITISH_TEA_SPOON}>Британская чайная ложка</option>
                  <option value={CUBIC_POUND}>Кубический фунт</option>
                  <option value={CUBIC_INCH}>Кубический дюйм</option>
               </Select>
            </Stack>
         </div>
      </div>
   )
}