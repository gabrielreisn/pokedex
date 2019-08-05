import styled from "styled-components";

export const ImageWrapper = styled.img`
  width: 100px;
  align-self: center;
  margin: 30px;
  min-height: 100px;
`;

export const CardWrapper = styled.section`
  /* use radial-grad for front-card and solid color for back */
  /* background: radial-gradient(rgba(169,178,186,0.4), transparent); */
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
