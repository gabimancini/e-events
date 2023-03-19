import { useState } from "react";
import {logout } from "../../firebase-config";
import './dropdown.css';
import Link from "../atoms/Link/Link";
import LogoutIcon from "./../../assets/icon/logout.svg";
import DropdownIcon from './../../assets/icon/dropdown.png';
import DropdownDownIcon from './../../assets/icon/dropdownDown.svg';
const Dropdown = ({name}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
      };
return(
    <div className="dropdown-menu" onClick={handleOpen}>
  
    <button  className="avatar">{name}</button>
   
    {open? <>
    <img src={DropdownIcon} alt="Dropdown Icon"/> 
    
    <div className="subItem" >
    <button className="button"  onClick={logout} >Logout</button>
   <img src={LogoutIcon} alt="Logout" />
   </div>
   </>: <img src={DropdownDownIcon} alt="Dropdown Icon Down"/> 
    }
    </div>
)
}
export default Dropdown;