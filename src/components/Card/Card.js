import React from "react";
import { CardContainer, StyledImage, StyledH1, StyledContent  } from "./styles";

const Card = (props) => {
  return (
    <CardContainer>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
      </style>
      <StyledImage src={props.image}/>
      <StyledContent>
        <StyledH1>{props.name}</StyledH1>
        <StyledH1>R$ {props.price}</StyledH1>
      </StyledContent>
    </CardContainer>
  );
}

export default Card;
