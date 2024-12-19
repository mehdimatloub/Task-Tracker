import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Tâches</h1>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px' }}>
        Planifiez votre journée en détails
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/tasks">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Voir les Tâches
          </button>
        </Link>
        <Link to="/about">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Voir À propos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
