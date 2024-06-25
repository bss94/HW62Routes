import {Button, Col, Row} from 'react-bootstrap';
import {NavLink, Outlet} from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <Row>
        <Col/>
        <Col sm={10}>
          <h2 className="mt-5 text-center">Портфолио</h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
            <NavLink className="nav-link m-2" to="movie-joke"><Button>Homework Movie/joke</Button></NavLink>
            <NavLink className="nav-link m-2" to="saper"><Button>Homework Saper</Button></NavLink>
            <NavLink className="nav-link m-2" to="rand-ball"><Button>Homework random ball</Button></NavLink>
          </div>
        </Col>
        <Col/>
      </Row>
      <Outlet/>
    </>
  );
};

export default Portfolio;