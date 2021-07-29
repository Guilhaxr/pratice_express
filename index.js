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
    // console.log(request.query.currency) last quest
    const currency = request.query.currency
    const filteredItemsByCurrency = currency ? items.filter((item)=> item.currency === currency) : items // It will filter all currency to show eur or usd, in this case I need put this variable into the variable in the response.send. After that I create a condition, if currency is true it'll show it, else will show the items.
    // console.log(request.query)
    // response.send(items)
    const limit = request.query.limit ? request.query.limit : 10 // if the query.limit is true it will show him, else will show 10 ( in /resources) 3quest
    // response.send(items.splice(0, limit)) // splice will cut an array array.splice(index, howmany) 3 quest

    response.send(filteredItemsByCurrency.splice(0, limit)) // last quest// it's filtering the currency with the limit I ordered


})

app.get('/resources/:id', (request, response)=>{
    const parsedId = parseInt(request.params.id)
    const selectedItem = items.find((item)=> parsedId === item.id);
    response.send(selectedItem ? selectedItem : {message: 'This item does not exist'} )
    console.log(request.params.id)
})


app.listen(serverPort, ()=>{
 console.log(chalk.blue.inverse('Server is running :D'))
})