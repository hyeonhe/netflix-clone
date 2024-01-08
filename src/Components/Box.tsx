import { makeImagePath } from "../utils";
import { motion } from "framer-motion";
import styled from "styled-components";

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
  movieId: number;
  backdrop_path: string;
  onBoxClicked: (movieId: number) => void;
  children: React.ReactNode;
}

const Box = ({ movieId, backdrop_path, onBoxClicked, children }: IBoxProps) => {
  return (
    <BoxDiv
      layoutId={movieId + ""}
      key={movieId}
      whileHover="hover"
      initial="normal"
      variants={boxVariants}
      onClick={() => onBoxClicked(movieId)}
      bg_photo={makeImagePath(backdrop_path, "w500")}
      transition={{ type: "tween" }}
    >
      {children}
    </BoxDiv>
  );
};

export default Box;
