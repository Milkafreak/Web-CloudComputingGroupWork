import {db} from './init'
import {books, Book} from '../books'

export function getAllBooks(search:string, fn:(books:Book[]) => void) {
  const sql = `
              SELECT * FROM Book b
              WHERE b.title LIKE '%' || ? || '%'
              `
  const params:string[] = [search]
  return db.all(sql, params, (err, rows) =>{
    if( err ) {
      console.log("error in database: "+err)
      fn([])
    } else {
      console.log(rows)
      // Now get the authors for each book and add it to the result
      fn(rows)
    }
  })
}

export function getAllAuthors(search:string, fn:(books:Book[]) => void) {
  const sql = `
              SELECT * FROM author
              WHERE name LIKE '%' || ? || '%'
              `
  const params:string[] = [search]
  return db.all(sql, params, (err, rows) =>{
    if( err ) {
      console.log("error in database: "+err)
      fn([])
    } else {
      console.log(rows)
      // Now get the authors for each book and add it to the result
      fn(rows)
    }
  })
}

export function getOneBook(id:number, fn:(book:Book|null) => void) {
  const sql = "SELECT * FROM Book WHERE id = ?"
  const params:string[] = [""+id]
  return db.get(sql, params, (err, row) =>{
    if( err ) {
      console.log("error in database: "+err)
      fn(null)
    } else {
      console.log(row)
      // get the authors of the book and add it to the book
      fn(row)
    }
  })
}

export function getOneAuthor(id:number, fn:(book:Book|null) => void) {
  const sql = "SELECT * FROM author WHERE id = ?"
  const params:string[] = [""+id]
  return db.get(sql, params, (err, row) =>{
    if( err ) {
      console.log("error in database: "+err)
      fn(null)
    } else {
      console.log(row)
      // get the authors of the book and add it to the book
      fn(row)
    }
  })
}


// export function addOneBook(s:Book) {
//   const sql = "INSERT INTO book (id,title, image, rating, numberrating) VALUES (?,?,?,?,?)"
//   console.log(s)
//   db.run(sql, [s.id, s.title, s.image, s.rating, s.numberrating])
//   // insert one new book into the database
//   // Don't forget to add the relation to authors
//   // The relation to authors is established using the author identifiers
// }

export function addOneBook(s:Book) {
  const insertAuthor = 'INSERT INTO author (name) VALUES (?)' // autoincrement, so no id provided
  const insertBook = 'INSERT INTO book (title, image, rating, numberrating, category) VALUES (?,?,?,?,?)' // autoincrement, so no id provided
  const insertRelation = 'INSERT INTO author_book (author_id, book_id) VALUES (?,?)'

  db.run(insertBook, [s.title, s.image, s.rating, s.numberrating, s.category]) // add book in book table


  s.authors.forEach(author => { // sql statement we use later to fetch authors id
    const sqlAuthor = `SELECT id
                       FROM author
                       WHERE name = ?` // author comes from the input form

    const paramsAuthor:string = author

    const sqlBook = `SELECT id
                     FROM book
                     ORDER BY id DESC LIMIT 1` // ID of the latest book in the table -> will always be the new book. The highest id will be on top

    // Check if author already exits
    db.get(sqlAuthor, paramsAuthor, (err, row) => { // return just the id from the sequel statement above. With * it would fetch the entire row
      const authorID = JSON.stringify(row)

      if (row === undefined) {  // If author does not exist:

        console.log(author + ' does not exist in db')
        // Insert author into author table (ID is inserted automatically via autoincrement)
        db.run(insertAuthor, author) // run insertauthor sql with author
        console.log(author + ' now added in db')
        // Fetch ID auf newly inserted author
        db.get(sqlAuthor, paramsAuthor, (err3, row3) => { // We need ID of newly created author to insert it in relation table. Row3 is just a new name.
          const authorIDnew = JSON.stringify(row3.id)
          console.log(author + 's ID is now: ' + authorIDnew)
        // Fetch ID of newly created Book
          db.get(sqlBook,(err2, row2) => {
            const bookIDnew = JSON.stringify(row2.id)
          // Insert author / book relation with the corresponding IDs
            db.run(insertRelation, authorIDnew, bookIDnew)
          } )

        })

    } else { // else if author already exists

      const authorIDold = JSON.stringify(row.id)
      console.log(author + ' - author already in database with ID - ' + authorIDold)
      // Fetch ID book ID
      db.get(sqlBook,(err2, row2) => { // we enter a new relation because same author but new book
        const bookIDnew = JSON.stringify(row2.id)
      // Insert author / book relation with the corresponding IDs
        db.run(insertRelation, authorIDold, bookIDnew)
      } )


    }
  })

  })}