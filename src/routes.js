import express from 'express';

const routes = express.Router();



routes.get('/users', (request, response)=>{
    console.log('lista de users');

    response.json([
        'Jose',
        'Cavalgin',
        'flavin',
        'kleitin'
    ]);
});

routes.post('/users2', (request, response)=>{
    console.log('lista de users');
    const user = {
        name: 'gleisin',
        email: 'gleisin@hotmail.com'
    }
    return response.json(user);
});

export default routes;