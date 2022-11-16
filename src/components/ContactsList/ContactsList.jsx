import PropTypes from 'prop-types';

export default function ContactsList({ contacts, onContactDelete }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key="id">
          <div>
            {`${name}: ${number}`}
            <button onClick={() => onContactDelete(id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  onContactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.string({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ),
};
