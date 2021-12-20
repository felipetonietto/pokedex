import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin-left: 10px;
  background-image: linear-gradient(#ffcb05, #c7a008);
  border: 1px solid #c7a008;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
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

export const Name = styled.h2`
  color: black;
`;

export const Info = styled.h3`
  margin-right: 8px;
  color: black;
`;

export const LineWapper = styled.div`
  justify-content: space-even;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
`;