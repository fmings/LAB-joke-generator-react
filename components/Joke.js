import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      {btnText !== 'Get A Punchline' ? <h3>{joke.delivery}</h3> : ''}
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
