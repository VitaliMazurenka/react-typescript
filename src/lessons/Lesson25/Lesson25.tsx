import {Lesson25Wrapper, LoginForm, Text} from './styles';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import Input from 'components/Input';
import Button from 'components/Button';

function Lesson25 () {
    // Создаем Объект schema , в котором делаем валидацию наших полей в форме
        const schema = Yup.object().shape({
            email: Yup.string().
            required('Поле email обязательно!')
            .email ('Неправильный формат email'),
            password: Yup.string().min(3, "Минимальное количество символов 3")
            .max(10, "Максимальное количество символов 10")
                .required('Поле password обязательное'),
        });
        

    // Создаем объект formik который включает в себя необходимые ф-ции и свойства для управления данными из формы
    
    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        // Передаем объект schema в validationSchema         
        validationSchema: schema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit:(values, actions)=>{
            console.log(values);
            console.log(actions);
            actions.resetForm();
            console.log('Submit works now');
        }     
        
    })

    console.log(formik);
    
    return <Lesson25Wrapper>
        <LoginForm onSubmit={formik.handleSubmit}>
            <Text>Login form</Text>
        <Input 
        // передаем props email компоненту Input, чтобы в нем отобразить ошибку
        error = {formik.errors.email}
        name={'email'} 
        value= {formik.values.email} 
        onChange = {formik.handleChange}
        labelName='Email' 
        placeholder='Enter email'/>
        <Input 
        error = {formik.errors.password}         
        name = {'password'}
        value = {formik.values.password}
        onChange = {formik.handleChange} 
        labelName='password' 
        placeholder='Enter password'/>
        <Button name='Login' type = "submit"/>
        </LoginForm>
    </Lesson25Wrapper>
}

export default Lesson25;