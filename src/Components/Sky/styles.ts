import styled from "styled-components";

const Image = styled.img`
  width: 300px;
  height: 300px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;	
`;

const Container = styled.div`
  
.estrela{
	width: 2px;
	height: 2px;
	position: absolute;
  background-color: ${props => props.theme.sky.star};
	top: 20%;
	left: 50%;
  border-radius: 50%;
  z-index: -1
}
.estrela:nth-child(2){
	/*background-color: red;*/
	top: 30%;
	left: 50%;
}
.estrela:nth-child(3){
	top: 40%;
	left: 80%;
}
.estrela:nth-child(4){
	top: 80%;
	left: 10%;
}
.estrela:nth-child(5){
	top: 80%;
	left: 50%;
}
.estrela:nth-child(6){
	top: 10%;
	left: 90%;
}
.estrela:nth-child(7){
	top: 40%;
	left: 20%;
}
.estrela:nth-child(8){
	top: 90%;
	left: 60%;
}
.estrela:nth-child(9){
	top: 20%;
	left: 66%;
}
.estrela:nth-child(10){
	top: 18%;
	left: 33%;
}
.estrela:nth-child(2n){
	animation: estrela-par 2s infinite;
}
@keyframes estrela-par{
	0%, 90%{
		box-shadow: ${props => props.theme.sky.shadow1};
	}
	100%{
		box-shadow: ${props => props.theme.sky.shadow2};
	}
}
.estrela:nth-child(2n+1){
	animation: estrela-impar 2s infinite;
}
@keyframes estrela-impar{
	0%, 35%, 50%{
		box-shadow: ${props => props.theme.sky.shadow1};
	}
	45%{
		box-shadow: ${props => props.theme.sky.shadow2};
	}
}
`;
export { Image, Container }