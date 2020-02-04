import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext  } from "styled-components";
import { shade } from "polished";

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  
  const { colors, title, sky } = useContext(ThemeContext);

  return (
    <Container>
      Sky
      <img src={sky.img} alt=""/>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;