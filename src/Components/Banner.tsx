import styled from "styled-components";

const BannerWrapper = styled.div<{ bg_photo: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bg_photo});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
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
