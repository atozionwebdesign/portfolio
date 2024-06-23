import "./ServiceCard.css";

import { Card } from "react-bootstrap";

const ServiceCard = (props) => {
  const img = props.img;
  const service = props.service;

  return (
    <Card className="mx-auto my-2">
      <Card.Body>
        <Card.Img src={img}></Card.Img>
        <Card.Title className="p-large">{service}</Card.Title>
        {/* <Card.Text className="p-small">{description}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
