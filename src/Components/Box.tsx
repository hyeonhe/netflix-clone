import { makeImagePath } from "../utils";
import { motion } from "framer-motion";
import styled from "styled-components";
import { movieState } from "../atom";
import { useSetRecoilState } from "recoil";
import { IMovie } from "../api";

const BoxDiv = styled(motion.div)<{ bg_photo: string }>`
  background-color: white;
  height: 200px;
  font-size: 30px;
  background-image: url(${(props) => props.bg_photo});
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

interface IBoxProps {
  onBoxClicked: (movieId: number) => void;
  children: React.ReactNode;
  data: IMovie;
}

const Box = ({ onBoxClicked, children, data }: IBoxProps) => {
  const setMovieId = useSetRecoilState(movieState);

  return (
    <BoxDiv
      layoutId={data.id + ""}
      key={data.id}
      whileHover="hover"
      initial="normal"
      variants={boxVariants}
      onClick={() => {
        onBoxClicked(data.id);
        setMovieId(data);
      }}
      bg_photo={makeImagePath(data.backdrop_path, "w500")}
      transition={{ type: "tween" }}
    >
      {children}
    </BoxDiv>
  );
};

export default Box;
