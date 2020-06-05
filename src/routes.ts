import express from 'express';
import knex from './database/conection';

const routes = express.Router();

routes.get('/products', async (request, response) => {

    const products = await knex('products').select('*');

    const serializedProducts = products.map(product => {
        return {
            id: product.id, 
            tittle: product.tittle,
            category: product.category,
            image_url: `http://localhost:3333/uploads/${product.image}`,
            price: product.price,
            amount: product.amount,
        }
        

    });
    response.json(serializedProducts);
});

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