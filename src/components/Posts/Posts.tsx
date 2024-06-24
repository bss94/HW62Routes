import PostItem from './PostItem';
import {NavLink} from 'react-router-dom';
import {POST} from '../../types';
import React from 'react';

interface Props {
  posts: POST[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <>
      {posts.map(el => {
        return <NavLink className="nav-link" to={`/posts/${el.id}`} key={el.id + Math.random() * 100}>
          <PostItem subtitle={el.subTitle} title={el.title} image={el.image}/>
        </NavLink>;
      })}
    </>
  );
};

export default Posts;