import React, { useState, useContext } from 'react';
import { AdsContext } from './AdsContext';

const AdItem = React.memo(({ ad }) => {
  const { deleteAd, editAd } = useContext(AdsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(ad.title);
  const [editedDescription, setEditedDescription] = useState(ad.description);

  const handleDelete = () => {
    deleteAd(ad.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editAd(ad.id, { title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(ad.title);
    setEditedDescription(ad.description);
  };

  const handleChangeTitle = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedTitle} onChange={handleChangeTitle} />
          <textarea value={editedDescription} onChange={handleChangeDescription} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{ad.title}</h2>
          <p>{ad.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
});

export default AdItem;
