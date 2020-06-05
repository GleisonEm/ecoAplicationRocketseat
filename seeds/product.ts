import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('products').insert([
        {tittle: 'Fíle', category: 'Bode', image: 'bode.jpg', price: 150, amount: 1},
        {tittle: 'Coxão Mole', category: 'Boi', image: 'boi.jpg', price: 200, amount: 1},
        {tittle: 'Bisteca', category: 'Porco', image: 'porco.jpg', price: 100, amount: 1},
        {tittle: 'Perníl', category: 'Ovelha', image: 'ovelha.jpg', price: 300, amount: 1},
    ]);
    
};
