import React from 'react';
import {Button, Col, Image, Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


interface Props {
  title: string;
  subTitle: string;
  image: string;
  body: string;

}

const FullPost: React.FC<Props> = ({
  title,
  subTitle,
  image,
  body,
}) => {
  return (
    <Row>
      <Col sm={3}/>
      <Col sm={6} className="text-center mt-5 border border-dark-subtle ">
        <h1 className="mt-5 mb-3">{title}</h1>
        <Image src={image} style={{width: '100%'}}/>
        <h4 className="mb-3 mt-2">{subTitle}</h4>
        <p className="mb-5 text-start p-2">{body}</p>
        <NavLink to="/">
          <Button className="mb-5">Назад</Button>
        </NavLink>
      </Col>
      <Col sm={3}/>
    </Row>
  );
};

export default FullPost;