/* eslint-disable react/jsx-indent */
import { useState } from 'react';
import axios from 'axios';

const projectID = '8573f163-7af7-41b6-b883-14195ffd904f';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chating</span>
            </button>
            <div className="login-tips">
              <p className="login-with-these">Login using one of these:</p>
              <div className="login-info">
                <em id="login-tips-headers">Username: </em>
                Boss, Client, Curious, Developer, Visitor
                <br />
                <em id="login-tips-headers">Password: </em>
                password
              </div>
            </div>
          </div>
          <h1 className="login-error">{error}</h1>
        </form>
      </div>
    </div>
  );
};

export default Modal;
