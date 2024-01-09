import { motion } from "framer-motion";
import styled from "styled-components";

const RowDiv = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  /* position: absolute; */
  width: 100%;
  padding: 0 2vw;
`;

const rowVariants = {
  hidden: { x: window.innerWidth + 5 },
  visible: { x: 0 },
  exit: { x: -window.innerWidth - 5 },
};

interface IRowProps {
  children: React.ReactNode;
  index: number;
}

const Row = ({ children, index }: IRowProps) => {
  return (
    <RowDiv
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "tween", duration: 1 }}
      key={index}
    >
      {children}
    </RowDiv>
  );
};

export default Row;
