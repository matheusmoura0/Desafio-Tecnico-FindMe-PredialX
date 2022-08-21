import styled from 'styled-components';

const Button = styled.button`
    background: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    float: right;
    &:hover {
        background: #43a047;
    }
    &:disabled {
        background: #ccc;
        color: #000;
        cursor: not-allowed;
    }
`;


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;


export { Button, Container, Form, Title };