import express from 'express'
import './data'
import { addOneBook, getAllAuthors, getAllBooks, getOneAuthor, getOneBook } from './data'

const app = express()
const port = 8080

app.use(express.static('public'))

// Getting all books, with search
app.get('/api/books', (req,res) => {
    const search:string = ( req.query.search || "" ) as string
    getAllBooks(search, (data) => { res.send(JSON.stringify(data)) })
})

// Getting one book
app.get('/api/books/:id', (req,res) => {
    const bookId = parseInt(req.params.id,10)
    getOneBook(bookId, (book) => {
        if (book != null) res.send(JSON.stringify(book))
        else {
            res.status(404)
            res.send()
        }
    })
})

app.get('/api/authors', (req,res) => {
    const search:string = ( req.query.search || "" ) as string
    getAllAuthors(search, (data) => { res.send(JSON.stringify(data)) })
})

app.get('/api/authors/:id', (req,res) => {
    const authorId = parseInt(req.params.id,10)
    getOneAuthor(authorId, (book) => {
        if (book != null) res.send(JSON.stringify(book))
        else {
            res.status(404)
            res.send()
        }
    })
})

// Adding one book
app.post('/api/books', (req,res) => {
    console.log('New Books Being added')
    let body = ""
    req
    .on('data', (data) => body += data)
    .on('end', () => { addOneBook(JSON.parse(body)) })
    res.end();
})

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );






























