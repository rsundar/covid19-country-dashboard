import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { countries, totalConfirmed } from '../redux/data/covidData';
import FilterInput from './FilterInput';
import World from './world.svg';

export default function Home() {
  const [filter, setFilter] = useState('');
  const countryComponents = useSelector(countries)
    .filter(({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()))
    .map((country, index) => (
      <LinkContainer key={country.id} to={`/details/${country.id}`}>
        <Col
          xs={6}
          sm={6}
          md={3}
          className={`
          d-flex flex-column justify-content-between
          align-items-end
          ${([1, 0, 0, 1][index % 2]) ? 'bg-blue1' : 'bg-blue2'}
        `}
        >
          <i className="far fa-arrow-alt-circle-right text-white mt-1 mb-4 h5" />
          <span
            className="d-flex flex-column align-items-end text-white mt-4"
            style={{ cursor: 'pointer' }}
          >
            <h5 className="d-inline-block m-0 text-end fw-bold">{country.name.toUpperCase()}</h5>
            <p>
              {
               Number(country.today_confirmed).toLocaleString()
              }
              {' '}
              Cases
            </p>
          </span>
        </Col>
      </LinkContainer>
    ));
  return (
    <div className="pt-3 bg-blue2">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img
            src={World}
            alt="World"
            height="150px"
          />
        </Col>
        <Col xs={6} sm={6} md={6} className="p-0 text-white d-flex flex-column justify-content-center">
          <h1 className="fw-bold m-0">GLOBAL</h1>
          <p>
            {Number(useSelector(totalConfirmed)).toLocaleString()}
            {' '}
            Total Cases
          </p>
        </Col>
      </Row>
      <Row className="pt-3 m-0 mt-4 bg-blue1" style={{ cursor: 'pointer' }}>
        <Row>
          <Col xs={12} sm={12} md={2}>
            <h6 className="text-white fw-bold m-0 p-2">CASES BY COUNTRY</h6>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <FilterInput setFilter={setFilter} />
          </Col>
        </Row>
        {countryComponents}
      </Row>
    </div>
  );
}
