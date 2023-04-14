import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function JokeGenerator() {
  const [setup, setSetup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [showPunchlineButton, setShowPunchlineButton] = useState(false);
  const [showNewJokeButton, setShowNewJokeButton] = useState(false);

  const handleSetup = () => {
    getJoke().then((joke) => {
      setSetup(joke.setup);
      setDelivery(joke.delivery);
      setShowPunchlineButton(true);
    });
  };

  const handleDelivery = () => {
    setShowPunchlineButton(false);
    setShowNewJokeButton(true);
  };

  const handleNewJoke = () => {
    getJoke().then((joke) => {
      setSetup(joke.setup);
      setDelivery(joke.delivery);
      setShowPunchlineButton(true);
      setShowNewJokeButton(false);
    });
  };

  return (
    <>
      <h2>{setup}</h2>
      {showNewJokeButton && <p>{delivery}</p>}
      {!showPunchlineButton && !showNewJokeButton && (
        <button type="button" onClick={handleSetup}>
          Get a Joke
        </button>
      )}
      {showPunchlineButton && (
        <button type="button" onClick={handleDelivery}>
          Show Punchline
        </button>
      )}
      {showNewJokeButton && (
        <button type="button" onClick={handleNewJoke}>
          Get a New Joke
        </button>
      )}
    </>
  );
}
