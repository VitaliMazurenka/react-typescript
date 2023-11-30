import { useState } from "react";

import "./styles.css";

import Counter from "../../components/Counter";
function Lesson21(){

    // создаем useState для управления состоянием счетчика
    // передаем стейт в useState  как generic  - тип <number>! 

    const [count, setCount] = useState <number>(0);

    // создаем функцию onPLus 

    const onPlus = ():void =>{
        setCount((prevValue:number)=>prevValue+1);
    };

    // Создаем функцию onMinus

    const onMinus = ():void =>{
        setCount((prevValue:number)=>prevValue-1);
    };

    // null и undefined

    let emptyContainer: null = null;
    let underContainer: undefined = undefined;

    // тип tupel  - позволяет хранить массив  фиксированной длины с разными типами данных в нем
    
    let tupelArray: [string, number, string] = ['Tiger', 3, 'Lion'];

    // тип void  - когда функция ничего не возвращает, просто что то выполняет 

    function helloWorld(): void{
        console.log('Hello World!');
    };

    const sayHi = (): void =>{
        console.log('Hi!');

    };
    // типизация функций которая что то возвращает 
    // const sum  = (a:number,b:number) : number =>{
    //     return a+b;
    // }

    // Тип any - когда типизация не строгая и мы не знаем что там может лежать

    let anyType: any = 3;
    anyType = "3";
    anyType=()=>console.log('Any function');

    // Тип enum - перечисляемые константы

    enum SEASONS {
        WINTER = 'Winter',
        SPRING = 'Spring',
        SUMMER = 'Summer',
        AUTUMN = 'Autumn',
    };
    let spring: SEASONS = SEASONS.SPRING;
    
    // Сравнение 2 строк 
    console.log(SEASONS.SUMMER === "Summer");
    console.log(spring);

    // Типизация обьектов 

    interface Persons {
        pets: string[];
    }

    interface Person2{
        someInfo?:string;
    }


    interface Person extends Persons, Person2 {
        name: string;
        lastName: string;
        age: number;
        hairColor: string;
        // ? - означает что свойство не обязательное
        isMarried?: boolean;
    };

    const person: Person ={
        name: 'George',
        lastName: 'Smith',
        age: 35,
        hairColor: "Black",
        pets:["Tiger"],
    };

        // Несколько типов одной переменной 

        let some: string | undefined = undefined;

        some  = "Hello";
  return (
  <div className="lesson21-wrapper">
        <Counter count = {count} onPlus = {onPlus} onMinus = {onMinus}/>
  </div>
  );
}

export default Lesson21;