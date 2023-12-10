import {UsersWrapper} from './styles'
import Button from 'components/Button';
import {useNavigate} from 'react-router-dom';
import { react } from '@babel/types';
 
function Users(){
    const navigate = useNavigate();

    const goToHomepage = () =>{
        navigate("/");
    }

    return<UsersWrapper>
        Users
        <Button name="Go to Homepage" onClick={goToHomepage}/>
        </UsersWrapper>
}

export default Users;