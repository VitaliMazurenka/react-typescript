import styled from "styled-components";

import { WeatherImage } from "assets";
// import  WeatherImage  from "assets/weather.png";

export const WeatherWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: url(${WeatherImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1256px) {
    background: mediumseagreen;
  }

  @media (max-width: 900px) {
    background: black;
  }
`;
