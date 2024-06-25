import React from 'react';
import {ORDER} from '../../types';
import OrderItem from '../../components/OrderItem/OrderItem';
import {Col, Row} from 'react-bootstrap';

interface Props {
  orders: ORDER[];
}

const AllOrders: React.FC<Props> = ({orders}) => {
  return (
    <Row>
      <Col/>
      <Col sm={8}>
        <h2 className="mt-5 text-center">Заявки</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
          {orders.map(el => {
            return <OrderItem name={el.name} order={el.order} phone={el.phone}
                              email={el.email} key={Math.random() * 1000}/>;
          })}
        </div>
      </Col>
      <Col/>

    </Row>
  );
};

export default AllOrders;