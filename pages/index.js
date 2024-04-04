import { useState } from 'react';
import { Button } from 'bootstrap';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const getAJoke = () => {
    getJoke().then((jokeObj) => {
      setJoke(jokeObj);
      setBtnText('Get A Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get a New Joke' ? (
        <Button type="button" onClick={getAJoke}>{btnText}</Button>
      ) : (
        <Button type="button" onClick={() => setBtnText('Get A New Joke')}>{btnText}</Button>
      )}
    </div>
  );
}

export default Home;
