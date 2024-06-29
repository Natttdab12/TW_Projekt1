import React, { useState } from 'react';

const AuthorForm = ({ addAuthor }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor({ name, surname });
    setName('');
    setSurname('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <input 
        type="text" 
        value={surname} 
        onChange={(e) => setSurname(e.target.value)} 
        placeholder="Surname" 
      />
      <button type="submit" className="add">Add Author</button>
    </form>
  );
};

export default AuthorForm;
