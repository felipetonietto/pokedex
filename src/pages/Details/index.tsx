import React from "react";

import { Link } from "react-router-dom";

import useModal from "../../hooks/useModal";

import Modal from "./DetailsModal/index";
import { Button, TitleText, LineWapper, Name, Info } from "./styles";

const Details: React.FC<any> = ({ pokemon, show }) => {
  const detailsModal = useModal();

  return (
    <>
      <Modal isOpen={detailsModal.isOpen} onClose={detailsModal.close} pokemon={pokemon}/>
      {!show ? (
        <>
          <TitleText>Details</TitleText>

          <img src={pokemon?.images?.large} alt="pokemon card" />

          <LineWapper>
            <Info>Name: </Info>
            <Name>{pokemon?.name}</Name>
          </LineWapper>

          <LineWapper>
            <Info>Id: </Info>
            <Name>{pokemon?.id}</Name>
          </LineWapper>

          <LineWapper>
            <Info>Type: </Info>
            <Name>{pokemon?.types}</Name>
          </LineWapper>

          <LineWapper>
            <Info>Resistances: </Info>
            <Name>
              {pokemon?.resistances?.map((item: any) => item.value)} on{" "}
              {pokemon?.resistances?.map((item: any) => item.type)}
            </Name>
          </LineWapper>

          <LineWapper>
            <Info>Weaknesses: </Info>
            <Name>
              {pokemon?.weaknesses?.map((item: any) => item.value)} on{" "}
              {pokemon?.weaknesses?.map((item: any) => item.type)}
            </Name>
          </LineWapper>

          <Button onClick={() => detailsModal.open()}>Attacks details</Button>

          <Link to="/">
            <Button>Back to the cards</Button>
          </Link>
        </>
      ) : null}
    </>
  );
};

export default Details;
