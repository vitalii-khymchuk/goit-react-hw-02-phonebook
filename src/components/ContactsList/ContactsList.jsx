import PropTypes from 'prop-types';
import { Button } from 'components/Button.styled';
import { ContactItem } from './ContactsList.styled';
import { Box } from '../Box.styled';
import { Title } from 'components/Title.styled';

export default function ContactsList({ contacts, onContactDelete }) {
  return (
    <Box>
      <Title>Contacts</Title>
      <ol>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <div>
              <span>{name}: </span>
              {number}
              <Button onClick={() => onContactDelete(id)}>Delete</Button>
            </div>
          </ContactItem>
        ))}
      </ol>
    </Box>
  );
}

ContactsList.propTypes = {
  onContactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ),
};
