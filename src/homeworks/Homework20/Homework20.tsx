import "./styles.css";

function Homework20() {
    // создаем переменные и присваиваем им тип
    let firstName: string = "John";
    let lastName: string = "Doe";
    let job: string = "Software Engineer";
    let isManager: boolean = false;
    let experience: number = 5;
    let email: string = "john.doe@google.com";
    let programLangs: string [] = ['JavaScript', 'Python', 'Machine Learning'];

    // тут делаем map нашего массива programLangs и возвращаем JSX элементы с данными из массива
    // Кто то может удалить тип к programLangs, и тогда если вы далее не правильно используете programLangs
    // у вас будет ошибка
    // 2. Это упрощает дебаггинг
    // 3. На проектах прописываются жесткие правила с помощью eslint, что аргументы должны типизироваться
    // становится очевидно что за тип и минимизирует риск ошибок
    // типизируем , когда знаем что должно прийти с бэка, однако бэкенд разработчик может прислать не
    // то что ожидается и вы тогда легко словите ошибку

    const newProgramLangs = programLangs.map((el:string)=>{
        return <p key={`langs - ${Math.random()}`}>{el}</p>;
    });

        return (
        <div className="hw-wrapper">
        <p className="company-personal">Homework</p>
        <p className="company-personal">{firstName}</p>
        <p className="company-personal">{lastName}</p>
        <p className="company-personal">{job}</p>
        <p className="company-personal">
            {isManager ? "Manager" : "Simple Employee"}</p>
            <p className="company-personal">{experience}</p>
            <p className="company-personal">{email}</p>
            {newProgramLangs}
        
        </div>
        );
};

export default Homework20;
