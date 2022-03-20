"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const books_1 = require("../books");
const sqlite3 = sqlite3_1.default.verbose();
exports.db = new sqlite3.Database("db.sqlite", (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    }
    else {
        console.log("Connected to the database");
        exports.db.run(`
CREATE TABLE author(
    id INTEGER PRIMARY KEY,
    name TEXT
)
`, (dberr) => {
            if (dberr) {
                console.log("Authors' table already created.");
            }
            else {
                const insert = 'INSERT INTO author (name) VALUES (?)';
                books_1.books.forEach(b => {
                    for (const i of b.authors) {
                        exports.db.run(insert, i);
                    }
                });
            }
        });
        exports.db.run(`
CREATE TABLE book(
    id INTEGER PRIMARY KEY,
    title TEXT,
    image TEXT,
    rating INTEGER,
    numberrating INTEGER,
    category TEXT
)
`, (dberr) => {
            if (dberr) {
                console.log("Books' table already created.");
            }
            else {
                const insert = `
INSERT INTO book (id,title, image, rating, numberrating, category) VALUES (?,?,?,?,?,?)
`;
                books_1.books.forEach(b => {
                    exports.db.run(insert, [b.id, b.title, b.image, b.rating, b.numberrating, b.category]);
                });
            }
        });
        exports.db.run(`
CREATE TABLE author_book(
    author_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY(author_id) REFERENCES author(author_id),
    FOREIGN KEY(book_id) REFERENCES book(book_id)
)
`, (dberr) => {
            if (dberr) {
                console.log("Book/Author relation table already created.");
            }
            else {
                const insert = `
                INSERT INTO author_book (author_id, book_id) VALUES (?,?)
                `;
                books_1.books.forEach(b => {
                    for (const i of b.authors) {
                        const sql = "SELECT id FROM author WHERE name = ?";
                        const params = i;
                        return exports.db.get(sql, params, (err, row) => {
                            if (err) {
                                console.log("error in database: " + err);
                                // fn(null)
                            }
                            else {
                                // console.log(row.id)
                                // console.log(b.id)
                                // get the authors of the book and add it to the book
                                // fn(row)
                                exports.db.run(insert, [row.id, b.id]);
                            }
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=init.js.map