import {Container, Input, Form} from './Style';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);

    const regexEmail = /\S+@\S+\.\S+/;
    
    const validEmail = regexEmail.test(email);




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
        <button type='button' disabled={ !validEmail || password.length < 6 }>Entrar</button>
        <button type='button' > Registrar </button>
        </Form>
    </Container>
    );
}
