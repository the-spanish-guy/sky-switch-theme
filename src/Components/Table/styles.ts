import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: auto;
  margin: 10px auto;
  display: flex;
  box-shadow: ${props => props.theme.table.alo};
  text-align: center;
  /* outline: 1px solid red; */
  table {
    width: 100%;
  }
`;