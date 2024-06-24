import React from 'react';
import {PRODUCT} from '../../types';
import ProductItem from './ProductItem';

interface Props {
  products: PRODUCT[];
}

const ProductList: React.FC<Props> = ({products}) => {
  return (
    <>
      {products.map(el => (
        <ProductItem name={el.name} properties={el.properties} price={el.price} key={el.id}/>
      ))}
    </>
  );
};

export default ProductList;