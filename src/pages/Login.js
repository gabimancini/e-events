import LoginForm from "../components/organisms/LoginForm/LoginForm";
import LoginImg from "../components/organisms/LoginImg/LoginImg";
import './Login.css';
function Login() {
  return (
    <section className="section-login">
     <div className="container login_container">
     <LoginImg />
 <LoginForm />
 </div>
    </section>
  
  )
 
}

export default Login;
