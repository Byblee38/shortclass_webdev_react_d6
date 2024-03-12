import React, { useState, useEffect } from 'react';

const Datadiri = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = () => {
      const name = prompt('Masukkan nama Anda:');
      if (name) {
        setUsername(name);
      }
    };
    fetchUsername();
  }, []);

  return (
    <div>
      <h1>Halo, {username}! Ini Adalah List Tugas Kamu</h1>
    </div>
  );
};

export default Datadiri;
