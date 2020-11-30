import React from "react";
import { Container } from "./styled";

const TripCard = (props) => {
  return (
    <Container onClick={props.onClick}>
      <p>{props.name}</p>
    </Container>
  )
}

export default TripCard;