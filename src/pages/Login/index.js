import { LoginPageStyle, LoginContainer, LoginBox, AuthBox, LoginTitle, LoginInput, LoginButton, WelcomeBox, LogoImg, LoginText, LoginChange } from "./style";
import Header from "../../components/Header";
import Logo from "../../images/yword.png";
import { VerticalLine } from "../../components/Line";
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [type, setType] = useState(true);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    
    });

    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: ""
    
    });

    const handleTypeChange = () => {
        setType(!type);
    }

    const handleLoginChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const handleRegisterChange = (e) => {
        setRegister({...register, [e.target.name]: e.target.value});
    }

    const handleLogin = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: login,
        }).then((response) => {
            setLogin({
                email: '',
                password: ''
            })
            localStorage.setItem('token', response.headers['authorization'])
            navigate('/home');
        }).catch((error) => {
            console.log(error);
            // toast.error(error.response.data.error);        
        });
    }

    const handleRegister = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/register',
            data: register
        }).then((response) => {
            setRegister({
                username: '',
                email: '',
                password: ''
            })
            localStorage.setItem('token', response.headers['authorization'])
            navigate('/home');
        }).catch((error) => {
            console.log(error);
            // toast.error(error.response.data.error);        
        });
    }

    return (
        <LoginPageStyle>
            <Header />
            <LoginContainer>

                {type ?
                    <LoginBox>
                        <AuthBox>
                            <LoginTitle>Login</LoginTitle>

                            <LoginInput type="email" name="email" placeholder="Email" value={login.email} onChange={handleLoginChange}/>
                            <LoginInput type="password" name="password" placeholder="Password" value={login.password} onChange={handleLoginChange} />
                            
                            <LoginButton onClick={handleLogin}> Login </LoginButton>

                            <LoginText>Pas encore de compte ?</LoginText>
                            <LoginChange onClick={handleTypeChange} > Créez en un ! </LoginChange>
                        </AuthBox>
                        <VerticalLine />
                        <WelcomeBox>
                            <LoginTitle>Welcome to</LoginTitle>
                            <LogoImg src={Logo} alt={"logo"} />
                            <LoginTitle>YWord</LoginTitle>
                        </WelcomeBox>
                    </LoginBox>
                :
                    <LoginBox>
                        <WelcomeBox>
                            <LoginTitle>Welcome to</LoginTitle>
                            <LogoImg src={Logo} alt={"logo"} />
                            <LoginTitle>YWord</LoginTitle>
                        </WelcomeBox>
                        <VerticalLine />
                        <AuthBox>
                            <LoginTitle>Sign In</LoginTitle>

                            <LoginInput type="text" name="username" placeholder="Username" value={register.username} onChange={handleRegisterChange} />
                            <LoginInput type="email" name="email" placeholder="Email" value={register.email} onChange={handleRegisterChange} />
                            <LoginInput type="password" name="password" placeholder="Password" value={register.password} onChange={handleRegisterChange} />

                            <LoginButton onClick={handleRegister} >Login</LoginButton>

                            <LoginText>Vous avez déjà un compte ?</LoginText>
                            <LoginChange onClick={handleTypeChange} > Connectez-vous ! </LoginChange>
                        </AuthBox>
                    </LoginBox>
                }

            </LoginContainer>
        </LoginPageStyle>
    );
};

export default Login;