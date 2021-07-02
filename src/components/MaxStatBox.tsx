import { StatProps } from "./types";

export const MaxStatBox = ({ text, value }: StatProps) => (
  <div className='text-xs rounded-md p-1 text-gray-500 bg-white w-16 text-center'>
    {text}
    <div className='text-black text-sm text-center'>{value}</div>
  </div>
);
