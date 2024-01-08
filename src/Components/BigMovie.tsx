import { motion } from "framer-motion";
import styled from "styled-components";
import { IMovie } from "../api";
import { makeImagePath } from "../utils";

const BigMovieWrapper = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 96vh;
  background-color: pink;
  top: 2vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 850px;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.darker};
`;

const BigCover = styled.img`
  width: 100%;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  text-align: center;
  font-size: 28px;
`;

const BigOverview = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

interface IBigMovieProps {
  clickedMovie: IMovie;
  layoutId: string;
}

const BigMovie = ({ clickedMovie, layoutId }: IBigMovieProps) => {
  return (
    <BigMovieWrapper layoutId={layoutId}>
      {clickedMovie && (
        <>
          <BigCover
            src={makeImagePath(clickedMovie.backdrop_path)}
            alt=""
          ></BigCover>
          <BigTitle>{clickedMovie.title}</BigTitle>
          <BigOverview>{clickedMovie.overview}</BigOverview>
        </>
      )}
    </BigMovieWrapper>
  );
};

export default BigMovie;
