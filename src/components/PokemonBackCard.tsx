import { PokemonBackCardProps } from "./types";
import { AttacksTable } from "./AttacksTable";
import { MaxStatBox } from "./MaxStatBox";

export const PokemonBackCard = ({
  onClick,
  attacks,
  maxCP,
  maxHP
}: PokemonBackCardProps) => {
  return (
    <div className=' bg-gray-100 w-52 h-80 flex flex-col my-6 mx-auto rounded-lg border border-gray-500 overflow-y-auto' onClick={onClick}>
      <div className="flex justify-evenly px-0 py-3">
        <MaxStatBox text="MAX CP" value={maxCP} />
        <MaxStatBox text="MAX HP" value={maxHP} />
      </div>
      <AttacksTable title="Fast Attacks" attacks={attacks.fast} />
      <AttacksTable title="Special Attacks" attacks={attacks.special} />
    </div>
  );
};
