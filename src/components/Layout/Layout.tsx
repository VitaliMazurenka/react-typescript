import {Link} from'react-router-dom'
import {useLocation} from 'react-router-dom'
import { LayoutWrapper, Header, Main, Footer, NavContainer, StyledLink} from "./styles";
import { LayoutProps } from "./types";
import Button from 'components/Button';
import { LogoWrapper } from 'components/Logo/styles';

function Layout({ children }: LayoutProps) {
    const location = useLocation();
    console.log(location);
  return (
  <LayoutWrapper>
    <Header>
    <LogoWrapper>Logo</LogoWrapper>
        <NavContainer>
        <StyledLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'white' })} to= "/">Home</StyledLink>
        <StyledLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'white' })} to= "/users">Users</StyledLink>
        <StyledLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'white' })} to= "about">About</StyledLink>
        <StyledLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'white' })} to= "clients">Clients</StyledLink>
        </NavContainer>
    </Header>
    <Main>{children}</Main>
    <Footer>Footer</Footer>
 </LayoutWrapper>)
}

export default Layout;
