import React from 'react';
import {Card} from 'react-bootstrap';

interface Props {
  title: string;
  image: string;
  subtitle: string;
}

const PostItem: React.FC<Props> = ({title, subtitle, image}) => {
  const cardStyle = {
    height: '250px'
  };
  return (
    <Card className=" mt-2">
      <Card.Img variant="top" style={cardStyle} src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {subtitle}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostItem;