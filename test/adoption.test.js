const request = require('supertest');
const app = require('../src/app.js');

describe('Adoption Routes', () => {
  it('GET /api/adoptions debe devolver status 200', async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/adoptions debe crear una adopción', async () => {
    const newAdoption = {
      userId: '1',
      petId: '1'
    };
    const res = await request(app).post('/api/adoptions').send(newAdoption);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.userId).toBe(newAdoption.userId);
    expect(res.body.petId).toBe(newAdoption.petId);
  });

  it('GET /api/adoptions/:id debe devolver una adopción por ID', async () => {
    const newAdoption = { userId: '2', petId: '2' };
    const postRes = await request(app).post('/api/adoptions').send(newAdoption);
    const id = postRes.body._id;

    const getRes = await request(app).get(`/api/adoptions/${id}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body).toHaveProperty('_id', id);
  });

  it('PUT /api/adoptions/:id debe actualizar una adopción', async () => {
    const newAdoption = { userId: '3', petId: '3' };
    const postRes = await request(app).post('/api/adoptions').send(newAdoption);
    const id = postRes.body._id;

    const updatedData = { userId: '4', petId: '4' };
    const putRes = await request(app).put(`/api/adoptions/${id}`).send(updatedData);
    expect(putRes.statusCode).toBe(200);
    expect(putRes.body.userId).toBe(updatedData.userId);
    expect(putRes.body.petId).toBe(updatedData.petId);
  });

  it('DELETE /api/adoptions/:id debe eliminar una adopción', async () => {
    const newAdoption = { userId: '5', petId: '5' };
    const postRes = await request(app).post('/api/adoptions').send(newAdoption);
    const id = postRes.body._id;

    const deleteRes = await request(app).delete(`/api/adoptions/${id}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body.message).toMatch(`Adopción con id ${id} eliminada`);
  });
});
