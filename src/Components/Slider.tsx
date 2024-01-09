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
  index: number;
  data: IGetMoviesResult;
  title: string;
}

const offset = 6;

const Slider = ({ onBoxClicked, index, data, title }: ISliderProps) => {
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

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
                movieId={movie.id}
                backdrop_path={movie.backdrop_path}
                onBoxClicked={() => onBoxClicked(movie.id)}
                key={movie.id}
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
