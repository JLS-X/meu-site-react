import React from 'react';
import { useParams } from 'react-router-dom';

 function UserProfile() {
  const { id } = useParams();

  const users = {
    1: { name: 'Alice', email: 'alice@email.com' },
    2: { name: 'Bob', email: 'bob@email.com' },
  };

  const user = users[id];

  if (!user) {
    return <p>Usuário com ID "{id}" não encontrado.</p>;
  }

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
export default UserProfile;