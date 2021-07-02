import { TypeTag } from "./TypeTag";
import { AttacksTableProps, AttackType } from "./types";

export const AttacksTable = ({ title, attacks }: AttacksTableProps) => (
  <>
    <span className='text-left ml-2 text-lg font-semibold'>{title}</span>
    <table className='my-3 mx-1'>
      <thead>
        <tr>
          <th className='text-left'>Attack</th>
          <th>Type</th>
          <th>Power</th>
        </tr>
      </thead>
      <tbody className='text-xs'>
        {attacks.map((el: AttackType) => (
          <tr key={`${el.name} - ${el.damage}`}>
            <td className='text-left'>{el.name}</td>
            <td>
              <TypeTag value={el.type} />
            </td>
            <td>{el.damage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
