import { useState, ChangeEvent } from "react";
import WeatherInput from "components/WeatherInput";
import { HeaderWrapper, InputButtonWrapper, WeatherWrapper } from "./styles";
import WeatherButton from "components/WeatherButton";
import WeatherInfo from "./components/WeatherInfo";
import WeatherError from "./components/WeatherError";

interface WeatherInfoData {
  temp: string;
  feelsLike: string;
  icon: string;
  cityName: string;
}

interface WeatherErrorData {
  code: string;
  message: string;
}

function Weather() {
  // APP_ID у каждого свой, найти его на можно на сайте у себя в зарегестрированном профиле
  const APP_ID: string = "039783c9dd75c9186d8b628a895a33aa";
  // Контролируем Weather Input
  const [city, setCity] = useState<string>("");
  // В этом стейте мы будем хранить успешно пришедшие данные с бекенда, но только те которые нам нужны для отображения
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoData | undefined>(
    undefined
  );
  // В этом стейте мы храним данные об ошибке, которая нам пришла с бека
  const [weatherError, setWeatherError] = useState<
    undefined | WeatherErrorData
  >(undefined);
  // loading нам нужен как индикатор загрузки, чтобы мы его показывали в момент ожиданиия данных по сети
  const [loading, setLoading] = useState<boolean>(false);
  // По  этому URL мы получаем данные из сервиса openweathermap
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const getWeatherInfo = async () => {
    // Тут проверяем пустое ли у нас поле, если да, то показываем alert и прерываем ф-ю
    if (city.trim().length === 0) {
      alert("Enter city name");
      return;
    }

    // очищаю 2 стейта weatherInfo и weatherError, т.к при каждом новом запросе
    // хочу скрывать контейнеры со старой инфорацией об ошибке или погоде
    setWeatherInfo(undefined);
    setWeatherError(undefined);
    //т.к у нас начинается запрос, мы показыаем индикатор загрузки
    setLoading(true);

    // делаем зарпрос в openweatherapp и получаем обьект Response(там храниться инфа об ответе на запрос)
    // и получаем data - там будут храниться либо данные об ошибке, либо данные о погоде
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
    if (response.ok) {
      const tempFromData = data.main.temp;
      const feelsLikeTempFromData = data.main.feels_like;
      //Когда у нас успешно пришли данные, делаем:
      // - setLoading(false) - чтобы скрыть индикатор загрузки
      // - кладем данные в setWeatherInfo
      setLoading(false);
      setWeatherInfo({
        temp: `${Math.round(tempFromData - 273.15)}°`,
        icon: `${data.weather[0].icon}`,
        cityName: `${data.name}`,
        feelsLike: `${Math.round(feelsLikeTempFromData - 273.15)}°`,
      });
    } else {
      //Когда у нас пришли данные с ошибкой, делаем:
      // - setLoading(false) - чтобы скрыть индикатор загрузки
      // - кладем данные в setWeatherError
      setLoading(false);
      setWeatherError({ code: data.cod, message: data.message });
    }
  };

  return (
    <WeatherWrapper>
      <HeaderWrapper>Weather App</HeaderWrapper>
      <InputButtonWrapper>
        <WeatherInput
          placeholder="Enter city name"
          value={city}
          onChange={onChangeCity}
        />
        <WeatherButton name="Search" onClick={getWeatherInfo} />
      </InputButtonWrapper>
      {loading && <h1>Loading...</h1>}
      {weatherInfo && (
        <WeatherInfo
          temp={weatherInfo.temp}
          icon={weatherInfo.icon}
          cityName={weatherInfo.cityName}
          feelsLike={weatherInfo.feelsLike}
        />
      )}
      {weatherError && (
        <WeatherError code={weatherError.code} message={weatherError.message} />
      )}
    </WeatherWrapper>
  );
}

export default Weather;
