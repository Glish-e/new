const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ origin: 'https://example.com', credentials: true }));


app.get('/', (rec, res) => {
    res.send("hello chouse arout to see indes")
})

app.use(express.json())

app.use('/index',express.static(path.join(__dirname, 'anime image.jpg')))

app.get('inde', () => 
    express.static('index.htm')
)


app.get('/items/:id', (rec, res) => {

    const id = Number(rec.params.id)
    const items = [
        {
        id: 1,
        item: 'paper',
        quantity: 2
    },
    {
        id: 2,
        item: 'pen',
        quantity: 2
    }]
    const recitem = items.find( p => p.id === id)
res.json(recitem)
})



app.listen(5000,() => console.log('server running'))