import {Row} from 'react-bootstrap';
import ProductList from '../../components/Product/ProductList';
import {OURPRODUCTS} from '../../constants';

const Products = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-2">Наши продукты</h1>
      <Row>
        <ProductList products={OURPRODUCTS}/>
      </Row>
    </>

  );
};

export default Products;