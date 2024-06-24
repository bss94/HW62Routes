import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {POST} from '../../../types';

interface Props {
  show: boolean;
  onClose: VoidFunction;
  onSubmit: (post: POST) => void;

}

const initialState = {
  title: '',
  subTitle: '',
  image: '',
  id: 'doc-',
  body: '',
};

const NewPost: React.FC<Props> = ({show, onClose, onSubmit}) => {
  const [newPost, setNewPost] = useState<POST>(initialState);

  const changePost = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewPost((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...newPost,
      id: newPost.id + Math.random().toString()
    });

    handleClose();
  };

  const handleClose = () => {
    onClose();
    setNewPost(initialState);
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Новый пост</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className="mb-3"
                      controlId="title"
          >
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newPost.title}
              onChange={changePost}
            />
          </Form.Group>
          <Form.Group className="mb-3"
                      controlId="subtitle"
          >
            <Form.Label>Подзаголовок</Form.Label>
            <Form.Control
              type="text"
              name="subTitle"
              value={newPost.subTitle}
              onChange={changePost}
            />
          </Form.Group>
          <Form.Group className="mb-3"
                      controlId="image"
          >
            <Form.Label>Изображение</Form.Label>
            <Form.Control
              type="url"
              name="image"
              required
              value={newPost.image}
              onChange={changePost}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="body"
          >
            <Form.Label>Текст</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="body"
              value={newPost.body}
              onChange={changePost}
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
              onClick={handleClose}
              className="mx-2"
            >
              Отмена
            </Button>
          </div>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewPost;