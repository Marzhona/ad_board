import React, { useState, useContext } from 'react';
import { AdsContext } from './AdsContext';
import './AdForm.css'; // Подключаем файл стилей

const AdForm = () => {
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
    <form className="ad-form" onSubmit={handleSubmit}>
      <h2>Advertisement Board</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Ad</button>
    </form>
  );
};

export default AdForm;
