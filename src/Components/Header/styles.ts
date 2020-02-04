import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  color: ${props => props.theme.colors.secondary};
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  img {
    width: 50px
  }
`;