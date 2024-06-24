import React from 'react';
import {Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

interface Props {
  name: string;
  price: string;
  properties: string;
}

const ProductItem: React.FC<Props> = ({
  name,
  price,
  properties
}) => {
  return (
    <Card className=" mt-2 p-0">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex align-items-center justify-content-between">
          <Card.Text>
            {properties}
          </Card.Text>
          <Card.Text>
            Примерная цена: {price}
          </Card.Text>
        </div>
        <Card.Footer className="text-end px-0">
          <NavLink to="/contacts" className="btn btn-outline-primary">Связаться с нами</NavLink>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;