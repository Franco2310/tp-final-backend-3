let users = [
  { id: 1, nombre: 'Usuario', email: 'usuario@email.com' }
];
let nextId = 2;

async function getUserById(id) {
  const user = users.find(u => u.id === Number(id));
  return user || null;
}

async function getAllUsers() {
  return users;
}

async function createUserService(data) {
  const newUser = {
    id: nextId++,
    nombre: data.nombre || 'Sin nombre',
    email: data.email || 'sinemail@example.com'
  };
  users.push(newUser);
  return newUser;
}

async function updateUserService(id, data) {
  const index = users.findIndex(u => u.id === Number(id));
  if (index === -1) return null;
  users[index] = {
    ...users[index],
    nombre: data.nombre !== undefined ? data.nombre : users[index].nombre,
    email: data.email !== undefined ? data.email : users[index].email
  };
  return users[index];
}

async function deleteUserService(id) {
  const index = users.findIndex(u => u.id === Number(id));
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

module.exports = {
  getUserById,
  getAllUsers,
  createUserService,
  updateUserService,
  deleteUserService
};
