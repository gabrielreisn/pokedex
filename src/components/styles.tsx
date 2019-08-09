import styled from "styled-components";

export const ApplicationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.img`
  width: 100px;
  align-self: center;
  margin: 30px;
  min-height: 100px;
`;

export const CardWrapper = styled.section`
  background: rgba(169, 178, 186, 0.2);
  width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  border-radius: 8px;
  border: 1px solid rgba(169, 178, 186, 0.5);
`;

export const Trapeizoid = styled.div`
  position: relative;
  border-bottom: 20px solid white;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  height: 0;
  width: 60px;
  align-self: center;
  text-align: center;
`;

export const TagWrapper = styled.div`
  align-self: flex-start;
  margin: 5px 10px;
`;

export const NameWrapper = styled.div`
  align-self: flex-start;
  margin: 0 10px;
  font-weight: 500;
`;

export const NumberWrapper = styled.span`
  position: relative;
  top: 4px;
  font-weight: 600;
  color: gray;
`;

export const ContentBox = styled.div`
  height: 100%;
  background: white;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  padding: 0 0 10px 0;
`;

export const Tag = styled.span`
  background: ${props => props.color};
  border-radius: 3px;
  padding: 1px 3px;
  margin: 0 3px;
`;

export const StatWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const Table = styled.table`
  margin: 10px 5px;
`;

export const TableBody = styled.tbody`
  font-size: 12px;
`;

export const AttackTitle = styled.span`
  text-align: left;
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
`;

export const AttackName = styled.td`
  text-align: left;
`;
export const AttackLabel = styled.th`
  text-align: left;
`;

export const StatValue = styled.div`
  color: black;
  font-size: 14px;
  text-align: center;
`;

export const StatBoxWrapper = styled.div`
  background: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  width: 70px;
  border-radius: 6px;
  text-align: left;
  padding: 5px;
  color: gray;
`;
