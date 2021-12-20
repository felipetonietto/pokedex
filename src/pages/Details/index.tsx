import React from "react";

import { Link } from "react-router-dom";

import useModal from "../../hooks/useModal";

import { Col, Row } from "react-bootstrap";

import Modal from "./DetailsModal/index";
import {
  Button,
  TitleText,
  LineWapper,
  Name,
  Info,
  DetailsLayout,
  ButtonText,
} from "./styles";

const Details: React.FC<any> = ({ pokemon, show }) => {
  const detailsModal = useModal();

  return (
    <>
      <Modal
        isOpen={detailsModal.isOpen}
        onClose={detailsModal.close}
        pokemon={pokemon}
      />

      <img
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/feature-.jpg"
        alt="jessie and james"
        width="300"
      />
      {!show ? (
        <>
          <DetailsLayout>
            <TitleText>Details</TitleText>

            <img src={pokemon?.images?.large} alt="pokemon card" />

            <Row>
              <Col lg={6} md={6} xs={12}>
                <LineWapper>
                  <Info>Name: </Info>
                  <Name>{pokemon?.name}</Name>
                </LineWapper>
              </Col>

              <Col lg={6} md={6} xs={12}>
                <LineWapper>
                  <Info>Id: </Info>
                  <Name>{pokemon?.id}</Name>
                </LineWapper>
              </Col>

              <Col lg={6} md={6} xs={12}>
                <LineWapper>
                  <Info>Type: </Info>
                  <Name>{pokemon?.types}</Name>
                </LineWapper>
              </Col>

              <Col lg={6} md={6} xs={12}>
                <LineWapper>
                  <Info>Resistances: </Info>
                  <Name>
                    {pokemon?.resistances?.map((item: any) => item.value)} on{" "}
                    {pokemon?.resistances?.map((item: any) => item.type)}
                  </Name>
                </LineWapper>
              </Col>

              <Col lg={6} md={6} xs={12}>
                <LineWapper>
                  <Info>Weaknesses: </Info>
                  <Name>
                    {pokemon?.weaknesses?.map((item: any) => item.value)} on{" "}
                    {pokemon?.weaknesses?.map((item: any) => item.type)}
                  </Name>
                </LineWapper>
              </Col>
            </Row>
          </DetailsLayout>
          <Button className="mt-3" onClick={() => detailsModal.open()}>
            <ButtonText>Attacks details</ButtonText>
          </Button>

          <Link to="/">
            <Button>
              <ButtonText>Back to the cards</ButtonText>
            </Button>
          </Link>
        </>
      ) : null}
    </>
  );
};

export default Details;
