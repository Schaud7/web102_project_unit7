// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import TopBar from './TopBar';
import CreateCrewmate from './CreateCrewmate';
import CrewmateList from './CrewmateList';
import'./App.css';

// Supabase setup
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<CrewmateList supabase={supabase} />} />
        <Route path="/create" element={<CreateCrewmate supabase={supabase} onCreate={fetchCrewmates} />} />
      </Routes>
    </Router>
  );
}

export default App;
