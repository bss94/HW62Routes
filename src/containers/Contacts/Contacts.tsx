import {Col, Row} from 'react-bootstrap';
import {OURCONTACTS} from '../../constants';
import Contact from '../../components/Contact/Contact';

const Contacts = () => {
  return (
    <Row>
      <Col/>
      <Col sm={8}>
        <h2 className="mt-5 text-center">Свяжитесь с нами</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
          {OURCONTACTS.map(el => {
            return <Contact firstName={el.firstName} secondName={el.secondName} position={el.position} phone={el.phone}
                            email={el.email} key={Math.random() * 1000}/>;
          })}
        </div>
      </Col>
      <Col/>

    </Row>
  );
};

export default Contacts;