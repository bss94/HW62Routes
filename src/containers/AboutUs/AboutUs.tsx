import {Col, Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const AboutUs = () => {
  return (
    <Row>
      <Col sm={3}/>
      <Col sm={6} className="text-center">
        <h2 className="mt-4">О нас:</h2>
        <h5 className="mt-4">ОсОО Б.А.С. и КО</h5>
        <p className="mt-4">На рынке более 10 лет! мы надежный производитель и поставщик оборудования для обеспечения
          бесперебойного
          использования тепловой энергии в многоквартирных домах и комерческой надвижимости.</p>

        <p className="fw-bold mt-3">Наши услуги включают:</p>
        <ul className="text-start mt-3">
          <li>Поставка оборудования для ИТП</li>
          <li>Изготовление ИТП в соответствии с расчетными параметрами</li>
          <li>Модернизация эксплуатируемых ИТП</li>
          <li>Изготовление эксплуатационной документации</li>
          <li>Монтаж ИТП</li>
          <li>Автоматизация ИТП</li>
          <li>Оптимизация настроек автоматики ИТП</li>
          <li>Обслуживание ИТП в первый год эксплуатации</li>
        </ul>
        <p className="fw-bold mt-3">Выбирая нас Вы получаете:</p>
        <ul className="text-start mt-3">
          <li>Бесплатное гарантийное обслуживание</li>
          <li>Экономию расхода тепловой энергии</li>
          <li>Бесплатную консультацию специалистов</li>
          <li>Оперативную сервисную поддержку</li>
        </ul>
        <NavLink to="/contacts" className="btn btn-outline-dark mt-4">Свяжитесь с нами</NavLink>
      </Col>
      <Col sm={3}/>
    </Row>
  );
};

export default AboutUs;