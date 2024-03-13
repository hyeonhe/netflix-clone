import { AnimatePresence } from "framer-motion";
import Row from "./Row";
import Info from "./Info";
import Box from "./Box";
import { useState } from "react";
import { IGetMoviesResult } from "../api";
import styled from "styled-components";

const Title = styled.span`
  padding: 2vh 2vw;
  font-size: 1.4vw;
`;

interface ISliderProps {
  onBoxClicked: (movieId: number) => void;

  data: IGetMoviesResult;
  title: string;
}

const offset = 6;

const Slider = ({ onBoxClicked, data, title }: ISliderProps) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  return (
    <>
      <Title>{title}</Title>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row index={index}>
          {data?.results
            .slice(1)
            .slice(offset * index, offset * index + offset)
            .map((movie) => (
              <Box
                onBoxClicked={() => onBoxClicked(movie.id)}
                key={movie.id}
                data={movie}
              >
                <Info title={movie.title} />
              </Box>
            ))}
        </Row>
      </AnimatePresence>
    </>
  );
};

export default Slider;
