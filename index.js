const express = require ('express');
const chalk = require ('chalk')
const serverPort = 6969;
const app = express();

const items = [
    {
        name :'book',
        price: 14,
        currency: 'EUR',
        id: 3345

    },
    {
        name :'micro',
        price: 89,
        currency: 'EUR',
        id: 1232

    },
    {
        name :'food',
        price: 1,
        currency: 'USD',
        id: 6772

    },
    {
        name :'coffe',
        price: 15,
        currency: 'EUR',
        id: 8503

    },
    {
        name :'book',
        price: 23,
        currency: 'EUR',
        id: 6660

    },
    {
        name :'news',
        price: 5,
        currency: 'USD',
        id: 9986

    },
    {
        name :'magazine',
        price: 60,
        currency: 'EUR',
        id: 7809

    },
    {
        name :'monitor',
        price: 190,
        currency: 'EUR',
        id: 2398

    },
    {
        name :'cap',
        price: 24,
        currency: 'USD',
        id: 5322

    },
    {
        name :'manga',
        price: 14,
        currency: 'EUR',
        id: 4352

    },
    {
        name :'book',
        price: 50,
        currency: 'USD',
        id: 2812

    },
    {
        name :'phone',
        price: 142,
        currency: 'EUR',
        id: 1623

    },
    {
        name :'border',
        price: 35,
        currency: 'EUR',
        id: 9472

    },
    {
        name :'computer',
        price: 56,
        currency: 'USD',
        id: 5667

    },
    {
        name :'headphone',
        price: 112,
        currency: 'EUR',
        id: 5462

    }

]


app.get('/resources', (request, response)=> {
    // console.log(request.query)
    // response.send(items)

const limit = request.query.limit ? request.query.limit : 10


})

app.get('/resources/:id', (request, response)=>{
    const parsedId = parseInt(request.params.id)
    const selectedItem = items.find((item)=> parsedId === item.id);
    response.send(selectedItem ? selectedItem : {message: 'This item does not exist'} )
})


app.listen(serverPort, ()=>{
 console.log(chalk.blue.inverse('Server is running :D'))
})