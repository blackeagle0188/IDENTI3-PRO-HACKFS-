
import React from "react";
import { Card, Image, Tooltip, OverlayTrigger } from "react-bootstrap";

export default (props) => {
  const { name, image } = props;

  return (
    <OverlayTrigger placement="top" overlay={<Tooltip className="m-0">{name}</Tooltip>}>
      <Card.Link href={`#${name}`} className="avatar ms-0">
        <Image rounded src={image} />
      </Card.Link>
    </OverlayTrigger>
  );
};
