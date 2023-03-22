import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import Dropdown from "../../molecules/Dropdown";
import './Nav.css';
const Nav = () => {
   
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
   
    console.log(db);
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            console.log(user.uid)
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

        fetchUserName();
    }, [user, loading]);
    return(
        <nav>
        <NavLink to="/" className="link">Home</NavLink>
        <a href="#" className="link">Prices</a>
        <a href="#" className="link">Contact</a>
        {user ? <Dropdown name={name}/>
        : 
        <>
        <NavLink to="/login" className="link">Login</NavLink>
        <NavLink to="/register" className="button black">Sign Up</NavLink>
       
       </>
        }
        </nav>
    )
}

export default Nav;