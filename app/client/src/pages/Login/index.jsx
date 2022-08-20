import {Container, Input, Form} from './Style';
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
        const res = await axios.post('http://localhost:3003/admin', data);
        if (res.data.token) {
            console.log('salvou');
            setLocalStorage('token', res.data.token);
            navigate('/dashboard');
        }
        

        } catch (error) { 
            console.log(error);
            setError(true);
        }
        
    }

  return (
    <Container>
        <Form>
        <Input 
        type="text" 
        onChange={ (e) => setEmail(e.target.value) }
        placeholder="Email" 
        />
        <Input 
        type={ showPassword ? 'text' : 'password' }
        onChange={ (e) => setPassword(e.target.value) }
        placeholder="Senha" 
        />
        <div>
            <input type="checkbox" onChange={ () => setShowPassword(!showPassword) } />
            <label>Mostrar Senha</label>
        </div>
        <button 
        type='button' 
        disabled={ !validEmail || password.length < 6 }
        onClick={ handleLogin }
        >Entrar
        </button>
        <p
        hidden={ !error }
        > Dados invalidos </p>
        </Form>
    </Container>
    );
}
