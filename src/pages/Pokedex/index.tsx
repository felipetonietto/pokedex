import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import api from "../../services/api";

import { Carousel } from "react-bootstrap";

// import { PokemonProvider } from "../context";

import { CardsContainer, Input, StyledButton } from "./styles";

import Details from "../Details/index";

// import { connect } from "react-redux";
// import { ApplicationState } from "../../store";
// import {bindActionCreators, Dispatch} from "redux";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
// import repositories from "../../store/ducks/repositories";
// import {Repository} from "../../store/ducks/repositories/types";
// import * as RepositoriesActions from "../../store/ducks/repositories/actions";

// interface StateProps {
//   repositories: Repository[];
// }

// interface DispatchProps {
//   loadRequest(): void;
// }

// interface OwnProps {

// }

// type Props = StateProps & DispatchProps & OwnProps;

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon]: any[] = useState({});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("pikachu");
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState(false);

  // const dispatch = useState();

  function setData(data: any) {
    setPokemon((prev: any) => ({ ...prev, ...data }));
  }

  async function getCards(event: any = null) {
    event && event.preventDefault();
    try {
      if (!search || search === "") {
        const { data } = await api.get(`/cards`);
        setPokemon(data);
      } else {
        const { data } = await api.get(`/cards?q=name:${search}*&orderBy=name`);
        setPokemon(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      setMobile(true)
     }
  }, []);

  return (
    <>
      <form>
        <Input
          onChange={({ target }) => {
            setSearch(target.value);
          }}
          placeholder="find the pokemon"
        />
        <Button onClick={(event) => getCards(event)} label="GO!"></Button>
      </form>

      {mobile ? (
        <Carousel className="w-90">
          {pokemon?.data?.length > 0 ? (
            pokemon?.data?.slice(0, 12).map((item: any, index: number) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.images.small} alt="pokemon card" 
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>
                     {item.flavorText}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          ) : (
            <h1>oops!</h1>
          )}
        </Carousel>
      ) : (
        <CardsContainer>
          {pokemon?.data?.length > 0 ? (
            pokemon?.data?.slice(0, 12).map((item: any, index: number) => {
              return (
                <div>
                  {/* <Details pokemon={item} show={show}></Details> */}
                  <Card header={item.name} headerRightComponent={item.id}>
                    <img src={item.images.small} alt="pokemon card" />
                    <h3>{item.types}</h3>
                    <Link to="/details">
                      <StyledButton onClick={() => setShow(true)}>Details</StyledButton>
                    </Link>
                  </Card>
                </div>
              );
            })
          ) : (
            <h1>No results for your search!</h1>
          )}
        </CardsContainer>
      )}
    </>
  );
};

export default Pokedex;

// const mapStateToProps = (state: ApplicationState) => ({
//   repositories: state.repositories.data,
// });

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(RepositoriesActions, dispatch)
// ;

// export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
