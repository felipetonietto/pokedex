import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const DetailsLayout = styled.div`
  /* margin: 15px 50px 15px; */
  padding-right: 100px;
  padding-left: 100px;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-left: 10px;
  background-image: linear-gradient(#ffcb05, #c7a008);
  border: 1px solid #c7a008;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-color: #3c5aa6;
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: default;
          opacity: 0.5;
        `
      : css`
          &:active {
            transform: scale(0.9);
          }
          &:hover {
            opacity: 0.9;
          }
        `}
`;

export const TitleText = styled.h1`
  font-family: "Pokemon Solid", sans-serif;
  color: #ffcb05;
  text-shadow: 4px 4px #2a75bb;
  /* font-size: calc(40px + 2vmin); */
`;

export const ButtonText = styled.text`
  color: #3c5aa6;
  font-weight: 700;
  /* font-size: calc(40px + 2vmin); */
`;

export const Name = styled.h2`
  color: #3c5aa6;
`;

export const Info = styled.h3`
  margin-right: 8px;
  color: #c7a008;
`;

export const LineWapper = styled.div`
  justify-content: space-even;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
`;
