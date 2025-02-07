import {PropTypes} from 'prop-types';

const FetchError = ({ error }) => {
  return (
    <div>
        Fetch Error:
      {error}
    </div>
  );
};

FetchError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default FetchError;
