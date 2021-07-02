import { TypeTag } from "./TypeTag";
import { PokemonFrontCardProps } from "./types";
import { imageUrlFromPokemonId } from "../utils";

export const PokemonFrontCard = ({
  number,
  name,
  types,
  onClick
}: PokemonFrontCardProps) => {
  return (
    <div className=' bg-gray-100 w-52 h-80 flex flex-col justify-around my-6 mx-auto rounded-lg border border-gray-500' onClick={onClick}>
      <img
        className="self-center"
        loading="lazy"
        src={imageUrlFromPokemonId(number)}
        alt={`pokemon ${name}`}
      />
      <div className='rounded-full py-0 px-3 bg-gray-400 w-16 text-center self-center mb-2'>
        <span className="relative font-semibold text-white">#{number}</span >
      </div>
      <div className="bg-white flex items-start flex-col-reverse py-3 px-0 rounded-b-lg">
        <div className='self-start my-1 mx-3'>
          {types.map((value, i) => (
            <TypeTag key={`${value} - ${i}`} value={value} />
          ))}
        </div>
        <div className='self-start my-0 mx-3 font-light'>{name}</div>
      </div>
    </div>
  );
};
