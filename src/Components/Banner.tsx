import styled from "styled-components";

const BannerWrapper = styled.div<{ bg_photo: string }>`
  width: 100vw;
  height: 56.25vw;
  padding: 2vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bg_photo});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-size: 3vw;
  margin-bottom: 1vh;
  color: white;
`;

const Overview = styled.p`
  font-size: 1.5vw;
  width: 40%;
  color: white;
  line-height: 2vw;
  word-break: keep-all;
`;

interface IBanner {
  bg_photo: string;
  title: string;
  overview: string;
}

const Banner = ({ bg_photo, title, overview }: IBanner) => {
  return (
    <BannerWrapper bg_photo={bg_photo}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </BannerWrapper>
  );
};

export default Banner;
