import PropTypes from 'prop-types';
import { Box } from '../Box.styled';
import { Title } from 'components/Title.styled';

export default function Filter({ onFilterChange, value }) {
  function onChange(e) {
    const query = e.currentTarget.value;
    onFilterChange(query);
  }
  return (
    <Box>
      <Title>Type to search</Title>
      <input value={value} name="filter" onChange={onChange} type="text" />
    </Box>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
