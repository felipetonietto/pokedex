import styled, { css } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  /* margin-bottom: 10px;
  margin-left: 10px; */
  align-items: center;
  width: 97%;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 97%;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #c7a008;
  border-radius: 5px;
  padding: 10px;
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

export const StyledButton = styled.button`
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

export const Text = styled.text`
  color: #3c5aa6;
  font-weight: bold;
  font-size: 30px;
  margin-left: 50px;
`;
export const CarouselH = styled.h3`
  color: #3c5aa6;
  font-weight: bold;
  font-size: 30px;
`;
export const CarouselP = styled.p`
  color: #3c5aa6;
  font-weight: bold;
  font-size: 30px;
`;

export const ButtonText = styled.text`
  color: #3c5aa6;
  font-weight: 600;
  /* font-size: calc(40px + 2vmin); */
`;