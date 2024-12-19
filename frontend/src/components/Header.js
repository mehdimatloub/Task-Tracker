import React from 'react';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
    <h1>Tâches</h1>
    <img src="/path/to/profile.jpg" alt="Profile" style={{ width: 40, height: 40, borderRadius: '50%' }} />
  </header>
);

export default Header;
