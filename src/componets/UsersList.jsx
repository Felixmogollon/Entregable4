import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Nombre:</strong> {user.first_name}
            <br />
            <strong>Apellido:</strong> {user.last_name}
            <br />
            <strong>Email:</strong> {user.email}
            <hr />
            <strong>Nombre:</strong> {user.birthday}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
