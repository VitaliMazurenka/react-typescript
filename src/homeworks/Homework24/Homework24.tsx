import { useState, useEffect, ChangeEvent } from "react";

import Button from "components/Button";

import { Homework24Wrapper, Text, Card, ContainerJokes } from "./styles";

// Обьявляем 3 стейта jokeQuestion, jokeAnswer - для отображения данных, к-ые пришли, и 
// jokeError - для отображеня ошибки
function Homework24() {
  const [jokeQuestion, setJokeQuestion] = useState<string | undefined>(
    undefined
  );
  const [jokeAnswer, setJokeAnswer] = useState<string | undefined>(undefined);
  const [jokeError, setJokeError] = useState<string | undefined>(undefined);

  const getJokes = async () => {
    // response возвращает объект Response, к-ый отображает инфо о ответе: status,ok, header etc...
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    // свойство ок показывает нам успешно или нет выполнен запрос
    // если true , то обрабатываем успешный ответ, если нет то ошибку

    if (response.ok) {
      // метод json() помогает нам получить body из объекта Response
      const data = await response.json();
      // console.log(data);
      setJokeQuestion(data.setup);
      setJokeAnswer(data.punchline);
    } else {
      setJokeError("Ошибка при получении данных");
    }
  };

  const handlerUpdateJoke = () => {
    if (jokeError === undefined) {
      alert("Вы получили новую шутку");
      getJokes();
    } else {
      alert("Ошибка при получении данных");
    }
  };
    // В жизненный цикл Mounting , вызываем функцию getJokes только один раз 
    // при каждом новом создании компонента , для этого мы 2 аргументом прокидываем []
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <Homework24Wrapper>
      <Card>
        <ContainerJokes>
          {jokeQuestion && <Text>{jokeQuestion}</Text>}
          {jokeAnswer && <Text>{jokeAnswer}</Text>}
          {jokeError && <Text>{jokeError}</Text>}
        </ContainerJokes>
        <Button
          name="new joke"
          onClick={handlerUpdateJoke}
        />
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;
