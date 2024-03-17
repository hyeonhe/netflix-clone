import { motion } from "framer-motion";
import styled from "styled-components";

interface OverlayProps {
  onClick: () => void;
}

const OverlayWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  overflow-y: auto;
  z-index: 2;
`;

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return (
    <OverlayWrapper
      onClick={onClick}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    ></OverlayWrapper>
  );
};

export default Overlay;
