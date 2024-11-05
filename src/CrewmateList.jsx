// CrewmateList.jsx
import React, { useEffect, useState } from 'react';

function CrewmateList({ supabase }) {
  const [crewmates, setCrewmates] = useState([]);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select('*');

    if (error) {
      console.error('Error fetching crewmates:', error);
    } else {
      setCrewmates(data);
    }
  };

  useEffect(() => {
    fetchCrewmates();
  }, []);

  return (
    <div>
      <h2>Crewmate Gallery</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            {crewmate.name} - {crewmate.attribute}
            {/* Add links or buttons to view/edit/delete here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrewmateList;
