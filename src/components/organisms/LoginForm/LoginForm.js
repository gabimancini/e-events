import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./../../.././firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import GroupField from "../../molecules/GroupField";
import ButtonIcon from "../../molecules/ButtonIcon/ButtonIcon";
import GoogleIcon from "./../../../assets/icon/iconGoogle.png";
import EyeIcon from "./../../../assets/icon/eyeIcon.png";
import EyeCloseIcon from "./../../../assets/icon/closeEye.png";
import Button from "../../atoms/Button";
import InputIcon from "../../molecules/InputIcon/InputIcon";
import './loginForm.css';
const LoginForm = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (

        <div className="login-form">
            <h2>Welcome</h2>
            <div>
                <GroupField
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    children="User mail"
                />
                <InputIcon
                    type={isRevealPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    src={isRevealPwd ? EyeCloseIcon : EyeIcon}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                    children="Password"
                    alt="Hide password"
                />
                <Button
                    className="button black loginWithEmail"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                    text="Login"
                />
                <div className="forgotPassword">
                    <Link to="/reset" >Forgot Password</Link>
                </div>
            </div>
            <div>
                <p>Or</p>
                <ButtonIcon src={GoogleIcon} className="button ghost loginWithGoogle" onClick={signInWithGoogle} text=" Login with Google" alt="Google Icon" />
                <div className="haveAccount">
                    Don't have an account? <Link to="/register">Register now.</Link>
                </div>
            </div>
        </div>
    );

}
export default LoginForm;