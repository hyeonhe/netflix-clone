import styled from "styled-components";
import { motion } from "framer-motion";

const InfoDiv = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -80px;
  h4 {
    text-align: center;
    font-size: 16px;
  }
`;

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

const Info = ({ title }: { title: string }) => {
  return (
    <InfoDiv variants={infoVariants}>
      <h4>{title}</h4>
    </InfoDiv>
  );
};

export default Info;
