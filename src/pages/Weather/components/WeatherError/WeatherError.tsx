import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./styles";
import { WeatherErrorProps } from "./types";

function WeatherError({ code, message }: WeatherErrorProps) {
  console.log(code, message);
  
  return (
    <WeatherErrorWrapper>
      <ApiError>API Error: {code}</ApiError>
      <ErrorMessage>{message}</ErrorMessage>
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
