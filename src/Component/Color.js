import React from "react";
import { Card, Button, Container } from "react-bootstrap";
const Color = (props) => {
  return (
    <Container>
      <Card style={{ height: "30rem" }}>
        <Card.Img
          variant="top"
          src={props.imageUrl}
          style={{ height: "20rem" }}
        />
        <Card.Body className="bg-success">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Color;
