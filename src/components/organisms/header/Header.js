import Nav from '../../components/Nav/Nav';
import Logo from '../../../assets/Logo.png';
import './header.css';
const Header = () => {
  
    return (
        <header>
        <img src={Logo} alt="Logo" />
           <Nav/>
        </header>
    )
}

export default Header;