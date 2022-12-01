import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <LoadMore type="button" onClick={onClick}>
        Load more
      </LoadMore>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
