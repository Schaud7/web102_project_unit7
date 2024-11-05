
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { useParams, useNavigate } from 'react-router-dom';

function EditCrewmate() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();
      setName(data.name);
      setAttribute(data.attribute);
    };
    fetchCrewmate();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('crewmates')
      .update({ name, attribute })
      .eq('id', id);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Crewmate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
          required
        />
        <button type="submit">Update Crewmate</button>
      </form>
    </div>
  );
}

export default EditCrewmate;
