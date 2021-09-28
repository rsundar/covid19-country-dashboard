import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from 'prop-types';

export default function FilterInput(props) {
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <InputGroup className="mb-2">
      <InputGroup.Prepend className="input-group-prepend">
        <i className="input-group-text fa fa-search" />
      </InputGroup.Prepend>
      <input type="text" onChange={filterValues} className="form-control no-shadow" />
    </InputGroup>
  );
}

FilterInput.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
