import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
import {POST} from '../../types';

interface Props{
  isAdmin:boolean;
  posts:POST[]
}

const Home:React.FC<Props> = ({isAdmin,posts}) => {
  let createBtn = (<></>)
  if(isAdmin){
    createBtn=(
      <Button>Новый пост</Button>
    )
  }
  return (
    <>
      <h1 className="text-center mt-5 mb-2">Наши новости</h1>
      <Row>

        <Col sm={3}/>
        <Col sm={6}>
          <Posts posts={posts}/>
        </Col>
        <Col sm={3}>{createBtn}</Col>
      </Row>

    </>

  );
};

export default Home;