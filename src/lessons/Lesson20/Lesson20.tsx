function Lesson20(){
    // Создание boolean переменной isActive и присвоение ей значения  true; 
    // если мы инициализировали переменную и сразу присвоили ей значение , без присвоения типа , то тип 
    // присваивается сам, в зависимости  от той переменной которую мы сразу передали.
    // 2. если явно указали тип, напр. boolean, то в других местах кода где мы захотим присвоить другие типы
    // у нас будет падать ошибка в консоль
let isActive: boolean = true;

// нельзя присвоить строку значению boolean
//isActive = '';

// 2 тип : number: любое число , как с плавающей точкой , так и целочисоенное 

let num: number  = 3;

num = 2.35;

// 3 тип : string : любые слова и выражения заключенные в "" или '' или ``

 let info: string = `Ваша число: ${num}`;

 // 4 тип : массив : string []:  в левой части пишем какие элементы будут в массиве, а в правой сам массив

   let fruits: string[] = ["Apple", "Orange"];
let numbers: number[] = [0,2,4];

    return <div className="lesson20-wrapper">{info}</div>;
}

export default Lesson20;