import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    let url = `https://matear-back.onrender.com/api/auth/token`;
    let token = localStorage.getItem('token');
    if (token) {
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      axios.post(url, null, headers);
    }
  }, []);

  const handleEditClick = () => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className='background'>
    <div className="profile">
      <h2>Perfil de usuario</h2>
      {isEditing ? (
        <div className="edit-profile">
          <label>
            Nombre:
            <input
              type="text"
              value={user ? user.name : ""}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
              className="input-field"
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="text"
              value={user ? user.mail : ""}
              onChange={(e) =>
                setUser({ ...user, mail: e.target.value })
              }
              className="input-field"
            />
          </label>
          <label>
            País:
            <input
              type="text"
              value={user ? user.country : ""}
              onChange={(e) =>
                setUser({ ...user, country: e.target.value })
              }
              className="input-field"
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              value={user ? user.address : ""}
              onChange={(e) =>
                setUser({ ...user, address: e.target.value })
              }
              className="input-field"
            />
          </label>
          <button className="btn-save" onClick={handleSaveClick}>
            Guardar
          </button>
          <button className="btn-cancel" onClick={handleCancelClick}>
            Cancelar
          </button>
        </div>
      ) : ( // Cambio aquí
        <>
          {user ? (
            <>
              <p>
                <strong>Nombre:</strong> {user.name}
              </p>
              <p>
                <strong>Correo electrónico:</strong> {user.mail}
              </p>
              <p>
                <strong>País:</strong> {user.country}
              </p>
              <p>
                <strong>Dirección:</strong> {user.address}
              </p>
            </>
          ) : (
            <p>No hay datos de usuario disponibles.</p>
          )}
          <button className="btn-edit" onClick={handleEditClick}>
            Editar
          </button>
        </>
      )}
    </div>
    </div>
  );
}

export default Profile
