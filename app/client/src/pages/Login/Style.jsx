import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`;

const Input = styled.input`
margin-top: 20px;
width: 80%;
height: 40px;
border-radius: 5px;
border: 1px solid #ccc;
padding: 0 10px;
font-size: 16px;
margin-bottom: 10px;
`;

const Form = styled.form`
min-height: 30rem;
min-width: 40rem;
max-width: 50rem;
margin:1rem auto;
background:#FFF;
border-radius: 0.5rem;
display:flex;
flex-direction:column;
align-items: center;
overflow:hidden;
border:1px solid #ccc;
background: whitesmooke;
`

export {
    Container,
    Input,
    Form
}