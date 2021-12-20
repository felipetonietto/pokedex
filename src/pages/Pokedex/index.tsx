import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import api from "../../services/api";

import { Carousel } from "react-bootstrap";

import "../../App.css";

// import { PokemonProvider } from "../context";

import {
  CardsContainer,
  Input,
  StyledButton,
  TextWrapper,
  Text,
  ButtonText,
} from "./styles";

import Details from "../Details/index";

// import { connect } from "react-redux";
// import { ApplicationState } from "../../store";
// import {bindActionCreators, Dispatch} from "redux";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
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
  const [search, setSearch] = useState("pikachu");
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState(false);

  // const dispatch = useState();

  function setData(data: any) {
    setPokemon((prev: any) => ({ ...prev, ...data }));
  }

  async function getCards(event: any = null) {
    event && event.preventDefault();
    setLoading(true);
    try {
      if (!search || search === "") {
        const { data } = await api.get(`/cards`);
        setPokemon(data);
      } else {
        const { data } = await api.get(`/cards?q=name:${search}*&orderBy=name`);
        setPokemon(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobile(true);
    }
  }, []);

  return (
    <>
      <img
        src="https://media.karousell.com/media/photos/products/2017/03/11/pokemon_trainer_ash_ketchum_outfit_1489214029_7ac5b4b8.jpg"
        alt="you're on it!"
        width="300"
        className="mb-3"
      ></img>
      <form>
        <Input
          onChange={({ target }) => {
            setSearch(target.value);
          }}
          placeholder="type the name to search"
        />
        <Button onClick={(event) => getCards(event)} label="GO!"></Button>
      </form>

      {loading ? (
        <Loader />
      ) : mobile ? (
        <Carousel className="w-90">
          {pokemon?.data?.length > 0 ? (
            pokemon?.data?.slice(0, 12).map((item: any, index: number) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.images.small}
                    alt="pokemon card"
                  />
                </Carousel.Item>
              );
            })
          ) : (
            <TextWrapper>
              <Text>No results for your search!</Text>
            </TextWrapper>
          )}
        </Carousel>
      ) : (
        <CardsContainer>
          {pokemon?.data?.length > 0 ? (
            pokemon?.data?.slice(0, 12).map((item: any, index: number) => {
              return (
                <div>
                  <Card header={item.name} headerRightComponent={item.id}>
                    <img src={item.images.small} alt="pokemon card" />
                    <h3>{item.types}</h3>
                    <Link to={`/details/${item.id}`}>
                      <StyledButton>
                        <ButtonText>Details</ButtonText>
                      </StyledButton>
                    </Link>
                  </Card>
                </div>
              );
            })
          ) : (
            <TextWrapper>
              <Text>No results for your search!</Text>
            </TextWrapper>
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
