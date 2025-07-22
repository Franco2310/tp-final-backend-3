// test/user.service.test.js

const {
  getUserById,
  getAllUsers,
  createUserService,
  updateUserService,
  deleteUserService
} = require('../src/services/user.service');

describe('User Service', () => {
  test('getUserById devuelve usuario', async () => {
    const user = await getUserById(1);
    expect(user).toEqual({ id: 1, nombre: 'Usuario', email: 'usuario@email.com' });
  });

  test('createUserService crea un nuevo usuario', async () => {
    const newUser = await createUserService({ nombre: 'Carlos', email: 'carlos@email.com' });
    expect(newUser).toHaveProperty('id');
    expect(newUser.nombre).toBe('Carlos');
  });

  test('getAllUsers devuelve todos los usuarios', async () => {
    const users = await getAllUsers();
    expect(Array.isArray(users)).toBe(true);
  });

  test('updateUserService actualiza un usuario', async () => {
    const updated = await updateUserService(1, { nombre: 'Actualizado' });
    expect(updated.nombre).toBe('Actualizado');
  });

  test('deleteUserService elimina un usuario', async () => {
    const deleted = await deleteUserService(1);
    expect(deleted).toBe(true);
  });
});
