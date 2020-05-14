import React from "react";
import {
  Container,
  Content,
  Title,
} from "./card.style";

function Card(props) {
  return (
    <Container invertOrder={props.invertOrder}>
      <Title>{props.title}</Title>
      <Content>
        {props.children}
      </Content>
    </Container>
  );
}

export default Card;
