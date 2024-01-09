import { useQuery } from "@tanstack/react-query";
import { IGetMoviesResult, getMovies, topLatedMovies } from "../api";
import { useState } from "react";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";
import Banner from "../Components/Banner";
import BigMovie from "../Components/BigMovie";
import Overlay from "../Components/Overlay";
import Slider from "../Components/Slider";
import { useRecoilValue } from "recoil";
import { movieState } from "../atom";

const Wrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
  height: 100vh;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sliders = styled.div`
  position: relative;
  top: -100px;
  display: flex;
  flex-direction: column;
  height: 1000px;
`;

const offset = 6;

function Home() {
  const navigate = useNavigate();
  const bigMovieMatch = useMatch("/movies/:movieId");

  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });

  const { data: topLated, isLoading: isTopLatedLoading } =
    useQuery<IGetMoviesResult>({
      queryKey: ["topLated"],
      queryFn: topLatedMovies,
    });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const selectedMovie = useRecoilValue(movieState);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    navigate("/");
  };

  const clickedMovie = bigMovieMatch?.params.movieId && selectedMovie;

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bg_photo={makeImagePath(data?.results[0].backdrop_path || "")}
            title={data?.results[0].title || ""}
            overview={data?.results[0].overview || ""}
          />

          <Sliders>
            <Slider
              onBoxClicked={onBoxClicked}
              index={index}
              data={data!}
              title={"시청 중인 영화"}
            />
            <Slider
              onBoxClicked={onBoxClicked}
              index={index}
              data={topLated!}
              title={"최고 평점 영화"}
            />
          </Sliders>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                {clickedMovie && (
                  <>
                    <Overlay onClick={onOverlayClick} />
                    <BigMovie
                      clickedMovie={clickedMovie}
                      layoutId={bigMovieMatch.params.movieId + ""} // movieId를 꼭 넘겨줘야 함
                    />
                  </>
                )}
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
