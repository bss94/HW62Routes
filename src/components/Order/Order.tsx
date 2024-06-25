import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {ORDER} from '../../types';

const initialState = {
  name: '',
  email: '',
  phone: '',
  id: 'order-',
  order: '',
};

interface Props {
  onOrderSubmit: (order: ORDER) => void;
}

const Order: React.FC<Props> = ({
  onOrderSubmit
}) => {
  const [newOrder, setNewOrder] = useState<ORDER>(initialState);
  const changeOrder = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewOrder((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onOrderSubmit({
      ...newOrder,
      id: newOrder.id + Math.random().toString()
    });

    onCancel();
  };
  const onCancel = () => {
    setNewOrder(initialState);
  };

  return (
    <Row>
      <Col/>
      <Col sm={10}>
        <Form onSubmit={onFormSubmit} className="mb-2">
          <Form.Group className="mb-3"
                      controlId="name"
          >
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newOrder.name}
              onChange={changeOrder}
            />
          </Form.Group>
          <Form.Group className="mb-3"
                      controlId="subtitle"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={newOrder.email}
              onChange={changeOrder}
            />
          </Form.Group>
          <Form.Group className="mb-3"
                      controlId="image"
          >
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              required
              value={newOrder.phone}
              onChange={changeOrder}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="order"
          >
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="order"
              value={newOrder.order}
              onChange={changeOrder}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary"
                    type="submit"
            >
              Сохранить
            </Button>
            <Button
              variant="secondary"
              onClick={onCancel}
              className="mx-2"
            >
              Отмена
            </Button>
          </div>
        </Form>
        <Col/>
      </Col>
    </Row>

  );
};

export default Order;