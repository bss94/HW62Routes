import React, {useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
import {POST} from '../../types';
import NewPost from '../../components/Posts/NewPost/NewPost';

interface Props {
  isAdmin: boolean;
  posts: POST[];
  addPost: (post: POST) => void;
}

const Home: React.FC<Props> = ({isAdmin, posts, addPost}) => {
  const [show, setShow] = useState<boolean>(false);


  let createBtn = (<></>);
  if (isAdmin) {
    createBtn = (
      <Button onClick={() => setShow(true)}>Новый пост</Button>
    );
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
      <NewPost show={show} onClose={() => setShow(false)} onSubmit={addPost}/>
    </>

  );
};

export default Home;