import React, {  useContext } from 'react';
import { ThemeContext  } from "styled-components";

import { Image, Container } from './styles';

const Sky: React.FC = () => {

  const { sky } = useContext(ThemeContext);

  console.log(`${sky.img}`)
  return (
    <Container>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>
      <div className="estrela"></div>

      <Image src={sky.img}>
      </Image>
    </Container>
  );
};

export default Sky;