import React, { useState } from "react";

import Modal from "../../../components/Modal/index";

import { FooterText, LineWapper, Info, Name, TitleText } from "./styles";

const DetailsModal: React.FC<{
  isOpen: boolean;
  onClose: Function;
  pokemon: any;
}> = ({ isOpen, onClose, pokemon }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  let last = pokemon?.attacks?.slice(-1)[0];

  return (
    <>
      <Modal
        closeButton
        show={isOpen || open}
        handleClose={onClose || handleClose}
        heading={<TitleText>Attack Details</TitleText>}
        centered
        body={
          <>
            {pokemon?.attacks?.map((item: any) => {
              return (
                <>
                  <LineWapper>
                    <Info>Name: </Info>
                    <Name>{item.name}</Name>
                  </LineWapper>

                  <LineWapper>
                    <Info>Cost: </Info>
                    <Name>{item.cost.join(", ")}</Name>
                  </LineWapper>

                  <LineWapper>
                    <Info>Description: </Info>
                    <Name>{item.text}</Name>
                  </LineWapper>
                  {item !== last && <hr></hr>}
                </>
              );
            })}
          </>
        }
        footer={<FooterText>Pokémon</FooterText>}
      />
    </>
  );
};

export default DetailsModal;
