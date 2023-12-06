import { useState, useEffect, ChangeEvent } from "react";
import Input from "components/Input";
import { HW24Wrapper, Card, Text } from "./styles";
import Button from "components/Button";


function Homework24(){
    const [firstName, setFirstName] = useState<string>("");
    const [joke, setJoke] = useState<string | undefined>(undefined);
    const [jokeError, setJokeError] = useState<string | undefined>(undefined);

        const Button:string = "Button";

        const getJoke = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        if (response.ok) {
            const data = await response.json();
                              
            setJoke(data.fact);
          } else {
            setJokeError("Error! No jokes, bro!");
          }
        };

        useEffect(() => {
            getJoke();
         }, []);
        

    return (
    <HW24Wrapper>
        <Card>
        <Input
          labelName="С каждым кликом смешнее шутка"/>
          {/* <Button>Тыц!</Button> */}
                <Text>Смешные шутки:</Text>
        {joke && <Text>{joke}</Text>}
        {jokeError && <Text>{jokeError}</Text>}
      </Card>
    </HW24Wrapper>
    );
}


export default Homework24;