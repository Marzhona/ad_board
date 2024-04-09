import React, { useState, useContext } from 'react';
import { AdsContext } from './AdsContext';

const AdForm = React.memo(() => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addAd } = useContext(AdsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Ad</button>
    </form>
  );
});

export default AdForm;
