const request = require('supertest');
const app = require('./index');

describe('Pruebas de la API', () => {

    test('GET / debe responder con estado 200', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Servidor en ejecucion en el puerto 3000');
    });

    test('GET /users debe responder con estado 200', async () => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);
    });

});