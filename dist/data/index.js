"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOneBook = exports.getOneAuthor = exports.getOneBook = exports.getAllAuthors = exports.getAllBooks = void 0;
const init_1 = require("./init");
function getAllBooks(search, fn) {
    const sql = `
              SELECT * FROM Book b
              WHERE b.title LIKE '%' || ? || '%'
              `;
    const params = [search];
    return init_1.db.all(sql, params, (err, rows) => {
        if (err) {
            console.log("error in database: " + err);
            fn([]);
        }
        else {
            console.log(rows);
            // Now get the authors for each book and add it to the result
            fn(rows);
        }
    });
}
exports.getAllBooks = getAllBooks;
function getAllAuthors(search, fn) {
    const sql = `
              SELECT * FROM author
              WHERE name LIKE '%' || ? || '%'
              `;
    const params = [search];
    return init_1.db.all(sql, params, (err, rows) => {
        if (err) {
            console.log("error in database: " + err);
            fn([]);
        }
        else {
            console.log(rows);
            // Now get the authors for each book and add it to the result
            fn(rows);
        }
    });
}
exports.getAllAuthors = getAllAuthors;
function getOneBook(id, fn) {
    const sql = "SELECT * FROM Book WHERE id = ?";
    const params = ["" + id];
    return init_1.db.get(sql, params, (err, row) => {
        if (err) {
            console.log("error in database: " + err);
            fn(null);
        }
        else {
            console.log(row);
            // get the authors of the book and add it to the book
            fn(row);
        }
    });
}
exports.getOneBook = getOneBook;
function getOneAuthor(id, fn) {
    const sql = "SELECT * FROM author WHERE id = ?";
    const params = ["" + id];
    return init_1.db.get(sql, params, (err, row) => {
        if (err) {
            console.log("error in database: " + err);
            fn(null);
        }
        else {
            console.log(row);
            // get the authors of the book and add it to the book
            fn(row);
        }
    });
}
exports.getOneAuthor = getOneAuthor;
function addOneBook(s) {
    const sql = "INSERT INTO book (id,title, image, rating, numberrating) VALUES (?,?,?,?,?)";
    console.log(s);
    init_1.db.run(sql, [s.id, s.title, s.image, s.rating, s.numberrating]);
    // insert one new book into the database
    // Don't forget to add the relation to authors
    // The relation to authors is established using the author identifiers
}
exports.addOneBook = addOneBook;
//# sourceMappingURL=index.js.map