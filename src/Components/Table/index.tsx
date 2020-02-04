import React from "react";
import { Container } from "./styles";

const Table: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Acesso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jhon Doe</td>
            <td>2</td>
            <td>Excluir</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Table;