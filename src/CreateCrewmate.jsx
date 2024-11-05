// CreateCrewmate.jsx
import React, { useState } from 'react';

function CreateCrewmate({ supabase, onCreate }) {
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('crewmates') // Make sure this matches your actual table name
      .insert([{ name, attribute }]);

    if (error) {
      console.error('Error creating crewmate:', error);
    } else {
      console.log('Crewmate created:', data);
      onCreate(); // Call the callback to refresh the gallery
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <label>Attribute:</label>
      <input 
        type="text" 
        value={attribute} 
        onChange={(e) => setAttribute(e.target.value)} 
        required 
      />
      <button type="submit">Create Crewmate</button>
    </form>
  );
}

export default CreateCrewmate;
