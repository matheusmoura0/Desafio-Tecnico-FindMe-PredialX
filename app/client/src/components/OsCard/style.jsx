import styled from 'styled-components';

const EditButton = styled.button`
    background: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
        background: #43a047;
    }
`;

const DeleteButton = styled.button`
    
    background: #f44336;
    width: 70px
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
    magin-top: 1rem;
    text-align: center;
    &:hover {
        background: #d32f2f;
    }
`;

const RedirectButton = styled.button`
    background: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
        background: #43a047;
    }
`;



export { EditButton, DeleteButton, RedirectButton };