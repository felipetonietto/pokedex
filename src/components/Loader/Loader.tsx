import React from "react";

import { TextWrapper, Text } from "./styles";

const Loader: React.FC = () => {
  return (
    <TextWrapper>
    <span>
    <Text>Loading</Text>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </span>
  </TextWrapper>
  );
};

export default Loader;
