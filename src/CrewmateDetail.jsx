
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { useParams, Link } from 'react-router-dom';

function CrewmateDetail() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h2>{crewmate.name}</h2>
      <p>Attribute: {crewmate.attribute}</p>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
}

export default CrewmateDetail;
