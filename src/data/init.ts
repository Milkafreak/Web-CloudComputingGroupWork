import sqlite from 'sqlite3'
import {books} from '../books'

// const jsonData = require('./books.json')

const sqlite3 = sqlite.verbose()

export const db = new sqlite3.Database("db.sqlite",
    (err) => {
        if( err ) {
            console.log(err.message)
            throw err
        } else {
            console.log("Connected to the database")
db.run(
`
CREATE TABLE author(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
)
`
, (dberr) => { if(dberr) {
                    console.log("Authors' table already created.")
               } else {
                    const insert = 'INSERT INTO author (name) VALUES (?)'
                    // db.run(insert, [0,"Philip K. Dick"])
                    // db.run(insert, [1,"Frank Herbert"])

                    books.forEach( b=> {
                        for(const i of b.authors)
                        {
                            db.run(insert, i);
                        }

                    })
                }

            })

db.run(
`
CREATE TABLE book(
    id INTEGER PRIMARY KEY,
    title TEXT,
    image TEXT,
    rating INTEGER,
    numberrating INTEGER
)
`
, (dberr) => { if(dberr) {
                    console.log("Books' table already created.")
               } else {
                    const insert =
`
INSERT INTO book (id,title, image, rating, numberrating) VALUES (?,?,?,?,?)
`
                    books.forEach( b => {
                        db.run(insert, [b.id, b.title, b.image, b.rating, b.numberrating])
                    })
                    // console.log(books)
                }
            })

db.run(
`
CREATE TABLE author_book(
    author_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY(author_id) REFERENCES author(author_id),
    FOREIGN KEY(book_id) REFERENCES book(book_id)
)
`

, (dberr) => { if(dberr) {
                  console.log("Book/Author relation table already created.")
               } else {
                    const insert =
`
INSERT INTO author_book (author_id, book_id) VALUES (?,?)
`
                    books.forEach( b => {
                        db.run(insert, [b.id, b.title, b.image, b.rating, b.numberrating])
                    })
                }
            })
        }
    })

