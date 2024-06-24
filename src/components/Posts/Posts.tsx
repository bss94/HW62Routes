
import PostItem from './PostItem';
import {NavLink} from 'react-router-dom';
import {POST} from '../../types';
import React from 'react';

interface Props{
  posts:POST[]
}
const Posts:React.FC<Props> = ({posts}) => {
  return (
    <>
      {posts.map(el=>{
        return <NavLink className='nav-link' to={`/post-${el.id}`}>
          <PostItem subtitle={el.subTitle} title={el.title} image={el.image} key={el.id}/>
        </NavLink>
      })}
    </>
  );
};

export default Posts;