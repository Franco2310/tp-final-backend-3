let adoptions = [];
let nextId = 1;

const getAllAdoptions = (req, res) => {
  res.status(200).json(adoptions);
};

const getAdoptionById = (req, res) => {
  const { id } = req.params;
  const adoption = adoptions.find(a => a._id === id);
  if (!adoption) return res.status(404).json({ error: 'No encontrada' });
  res.status(200).json(adoption);
};

const createAdoption = (req, res) => {
  const { userId, petId } = req.body;
  const newAdoption = { _id: `${nextId++}`, userId, petId };
  adoptions.push(newAdoption);
  res.status(201).json(newAdoption);
};

const updateAdoption = (req, res) => {
  const { id } = req.params;
  const { userId, petId } = req.body;
  const index = adoptions.findIndex(a => a._id === id);
  if (index === -1) return res.status(404).json({ error: 'No encontrada' });
  adoptions[index] = { ...adoptions[index], userId, petId };
  res.status(200).json(adoptions[index]);
};

const deleteAdoption = (req, res) => {
  const { id } = req.params;
  const index = adoptions.findIndex(a => a._id === id);
  if (index === -1) return res.status(404).json({ error: 'No encontrada' });
  adoptions.splice(index, 1);
  res.status(200).json({ message: `Adopción con id ${id} eliminada` });
};

module.exports = {
  getAllAdoptions,
  getAdoptionById,
  createAdoption,
  updateAdoption,
  deleteAdoption
};
