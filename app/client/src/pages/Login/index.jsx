import {Container, Input, Form} from './Style';

export default function Login() {
  return (
    <Container>
        <Form>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        </Form>
    </Container>
  )
}
