import { render, screen} from '@testing-library/react'
import Cabecalho from './index.jsx'

test ("Primeiro Teste", () => {
  const numero = 10
  expect(numero).toBe(10)
})

test ("Renderizar o nome do usuário logado", () => {
  render(<Cabecalho/>)
  const nomeUsuario = screen.getByText("Joana Fonseca Gomes")
  expect(nomeUsuario).toBeInTheDocument();
})