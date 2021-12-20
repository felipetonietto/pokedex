import React from "react";

import { Container, CardHeader, CardBody } from "./styles";

const Card: React.FC<{ header: string | React.ReactNode; headerRightComponent: string | React.ReactNode }> = ({
  header,
  headerRightComponent,
  children,
}) => {
  return (
    <Container>
      {header && (
        <CardHeader>
          <span>{header}</span> <span>{headerRightComponent}</span>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Container>
  );
};

export default Card;
