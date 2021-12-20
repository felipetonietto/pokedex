import styled, { css } from "styled-components";

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
`;
