import React from 'react';
import {Card} from 'react-bootstrap';

interface Props {
  name: string;
  email: string;
  phone: string;
  order: string;

}

const OrderItem: React.FC<Props> = ({
  name, email, phone, order
}) => {
  return (
    <Card style={{width: '18rem'}} className="mx-2 my-2">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>
          {order}
        </Card.Title>
        <Card.Text>
          email: {email}
          <br/>
          телефон: {phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderItem;