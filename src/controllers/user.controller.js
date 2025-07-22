const {
  getUserById,
  getAllUsers,
  createUserService,
  updateUserService,
  deleteUserService
} = require('../services/user.service.js');

async function getUser(req, res) {
  const userDTO = await getUserById(req.params.id);
  if (!userDTO) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(userDTO);
}

async function getUsers(req, res) {
  const usersDTO = await getAllUsers();
  res.json(usersDTO);
}

async function createUser(req, res) {
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await updateUserService(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deleted = await deleteUserService(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
