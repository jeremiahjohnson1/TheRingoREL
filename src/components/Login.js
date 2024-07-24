import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'BLUECODES$$0852jmiah') {  
      onLogin();
    } else {
      setError('PLEASE RETURN TO HOMEPAGE');
    }
  };

  return (
    <div>
      <h2>PLEASE RETURN TO HOMEPAGE</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="PLEASE RETURN TO HOMEPAGE"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">PLEASE RETURN TO HOMEPAGE!! </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
