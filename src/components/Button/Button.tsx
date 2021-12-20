import React from "react";

import { StyledButton, Text } from "./styles";

const Button: React.FC<{ label: string, onClick: (event:any) => Promise<void>}> = ({
  label,
  onClick
}) => {
  return (
    <StyledButton onClick={onClick}>
      <Text>
      {label}
      </Text>
      </StyledButton>
  );
};

export default Button;
