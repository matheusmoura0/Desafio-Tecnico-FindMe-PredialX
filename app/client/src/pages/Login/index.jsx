import {Container, Input, Form, LoginButton} from './Style';
import { useState } from 'react';
import axios from 'axios';
import { setLocalStorage } from '../../helpers/localStorage';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('admin@admin.com');
    const [password, setPassword] = useState('12345678');
    const [showPassword , setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
  

    const regexEmail = /\S+@\S+\.\S+/;
    const validEmail = regexEmail.test(email);
    
    const handleLogin = async () => { 
        const data = {
            email,
            password
        }
        try {
        const res = await axios.post('http://localhost:3001/admin', data);
        if (res.data.token) {
            console.log('salvou');
            setLocalStorage('token', res.data.token);
            navigate('/dashboard');
        }
        

        } catch (error) { 
            setError(true);
        }
        
    }

  return (
    <Container>
        <Form>
            <img
                src='https://media.discordapp.net/attachments/779206258082185217/1011048680486346944/unknown.png'
                alt='logo'
            />
        <Input 
        value={email}
        type="text" 
        onChange={ (e) => setEmail(e.target.value) }
        placeholder="Email" 
        />
        <Input 
        value={password}
        type={ showPassword ? 'text' : 'password' }
        onChange={ (e) => setPassword(e.target.value) }
        placeholder="Senha" 
        />
        <LoginButton 
        type='button' 
        disabled={ !validEmail || password.length < 6 }
        onClick={ handleLogin }
        >Entrar
        </LoginButton>
        <div>
            <label
            className='showpassowrd'
            htmlFor='showpassword'> 
            <input id='showpassword' type="checkbox" onChange={ () => setShowPassword(!showPassword) } />
            </label>Mostrar senha
        </div>
        <p
        className='errormsg'
        hidden={ !error }
        >  Administrador não encontrado </p>
        </Form>
    </Container>
    );
}
