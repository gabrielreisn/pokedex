import { TypeTagProps } from "./types";
import { pokemonTagType } from "../utils";

export const TypeTag = ({ value }: TypeTagProps) => (
  <span 
    style={{background: pokemonTagType(value), padding: '1px 3px', margin: '0 3px'}} 
    className='rounded'>
      {value}
  </span>
);