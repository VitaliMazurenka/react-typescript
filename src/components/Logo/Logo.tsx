import {useNavigate} from 'react-router-dom';
import { LogoWrapper } from './styles';

function Logo(){
    const navigate = useNavigate();

    const goToHomepage = () =>{
        navigate("/");
    }

    return 
    <LogoWrapper name="Go to Homepage" onClick={goToHomepage}>
     Logo
    </LogoWrapper>
}

export default Logo;