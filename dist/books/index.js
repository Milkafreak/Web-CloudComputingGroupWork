"use strict";
// This module should contain all functions related with books
// For now, it only contains the list of books
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
exports.books = [
    {
        id: 1,
        title: "University Physics (Ling)Test",
        authors: ["Samuel J. Ling"],
        image: "https://open.bccampus.ca/files/2016/10/OpenStax-University-Physics-Vol-1-151x196.jpg",
        rating: 5,
        numberrating: 300
    },
    {
        id: 2,
        title: "Principles of Management",
        authors: ["David S. Bright"],
        image: "https://open.bccampus.ca/files/2019/06/OTB218-01-Principles-of-Management-COVER-e1561494501428.jpg",
        rating: 5,
        numberrating: 255
    },
    {
        id: 3,
        title: "Introduction to Psychology",
        authors: ["Charles Stangor"],
        image: "https://open.bccampus.ca/files/2013/11/OTB012-01-introduction-to-psychology-151x196.jpg",
        rating: 5,
        numberrating: 120
    },
    {
        id: 4,
        title: "Information Systems",
        authors: ["Richard Watson"],
        image: "https://open.bccampus.ca/files/2013/11/OTB010-01-information-systems-151x196.jpg",
        rating: 5,
        numberrating: 450
    },
    {
        id: 5,
        title: "Where The Crawdads Sing",
        authors: ["Delia Owens"],
        image: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/027/181/original/delia_owens.jpg?1644848865",
        rating: 4,
        numberrating: 570
    },
    {
        id: 6,
        title: "The 4-Hour Work Week",
        authors: ["Timoti Ferris"],
        image: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/027/179/original/4hour.jpg?1644848850",
        rating: 5,
        numberrating: 850
    },
    {
        id: 7,
        title: "The Bitcoin Standard",
        authors: ["Saifedean Ammous"],
        image: "https://open.bccampus.ca/files/2013/11/OTB010-01-information-systems-151x196.jpg",
        rating: 5,
        numberrating: 450
    },
    {
        id: 8,
        title: "Information Systems",
        authors: ["Richard Watson"],
        image: "https://open.bccampus.ca/files/2013/11/OTB010-01-information-systems-151x196.jpg",
        rating: 3,
        numberrating: 122
    },
    {
        id: 9,
        title: "The Girl With The Dragon Tattoo",
        authors: ["Stieg Larsson"],
        image: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/027/170/original/stieg_larsson.jpg?1644838054",
        rating: 5,
        numberrating: 765
    },
    {
        id: 10,
        title: "Information Systems",
        authors: ["Richard Watson"],
        image: "https://open.bccampus.ca/files/2013/11/OTB010-01-information-systems-151x196.jpg",
        rating: 5,
        numberrating: 450
    },
    {
        id: 11,
        title: "The Unsinkable Greta James: A Novel ",
        authors: ["Jennifer E. Smith"],
        image: "https://m.media-amazon.com/images/I/41k5ka3zAML.jpg",
        rating: 4,
        numberrating: 275
    },
    {
        id: 12,
        title: "It Ends with Us: A Novel",
        authors: ["Colleen Hoover"],
        image: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY346_.jpg",
        rating: 5,
        numberrating: 71846
    },
    {
        id: 13,
        title: "Unbound: My Story of Liberation and the Birth of the Me Too Movement",
        authors: ["Tarana Burke"],
        image: "https://m.media-amazon.com/images/I/51uSP1mnuML.jpg",
        rating: 5,
        numberrating: 940
    },
    {
        id: 14,
        title: "Crying in H Mart: A Memoir",
        authors: ["Michelle Zauner"],
        image: "https://m.media-amazon.com/images/I/51gNCTAbLJS._SY346_.jpg",
        rating: 5,
        numberrating: 7218
    },
    {
        id: 15,
        title: "Of Human Bondage (Bantam Classics)",
        authors: ["W. Somerset Maugham", " Jane Smiley"],
        image: "https://images-na.ssl-images-amazon.com/images/I/71cOjTCUDpL.jpg",
        rating: 4,
        numberrating: 1329
    },
    {
        id: 16,
        title: "The Wind-Up Bird Chronicle: A Novel",
        authors: ["Haruki Murakami", "Jay Rubin"],
        image: "https://images-na.ssl-images-amazon.com/images/I/81dVKg6ZepL.jpg",
        rating: 5,
        numberrating: 3427
    },
    {
        id: 17,
        title: "The Psychology of Money : Timeless lessons on wealth, greed, and happiness",
        authors: ["Morgan Housel "],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/8571/9780857197689.jpg",
        rating: 4,
        numberrating: 49174
    },
    {
        id: 18,
        title: "Out of the Woods",
        authors: ["Luke Turner "],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4746/9781474607162.jpg",
        rating: 3,
        numberrating: 389
    },
    {
        id: 19,
        title: "1984",
        authors: ["George Orwell", "Erich Fromm"],
        image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
        rating: 5,
        numberrating: 59725
    },
    {
        id: 20,
        title: "A Brief History of Time",
        authors: ["Stephen Hawking"],
        image: "https://images-na.ssl-images-amazon.com/images/I/A1xkFZX5k-L.jpg",
        rating: 5,
        numberrating: 12738
    },
    {
        id: 21,
        title: "Find Your People: Building Deep Community in a Lonely World",
        authors: ["Jennie Allen"],
        image: "https://images-na.ssl-images-amazon.com/images/I/71F-7NDmDzL.jpg",
        rating: 5,
        numberrating: 280
    },
    {
        id: 22,
        title: "The House of Gucci: A True Story of Murder, Madness, Glamour, and Greed",
        authors: ["Sara Gay Forden"],
        image: "https://m.media-amazon.com/images/P/0060937750.01._SCLZZZZZZZ_SX500_.jpg",
        rating: 4,
        numberrating: 2156
    },
    {
        id: 23,
        title: "Good Enough: 40ish Devotionals for a Life of Imperfection",
        authors: ["Kate Bowler", "Jessica Richie"],
        image: "https://images-na.ssl-images-amazon.com/images/I/81W4rcXl-hL.jpg",
        rating: 5,
        numberrating: 106
    },
    {
        id: 24,
        title: "Fairy Tale",
        authors: ["Stephen King"],
        image: "https://images-na.ssl-images-amazon.com/images/I/51TFxz2pJOL._SX328_BO1,204,203,200_.jpg",
        rating: 4,
        numberrating: 100
    },
    {
        id: 25,
        title: "The Beauty of Dusk: On Vision Lost and Found ",
        authors: ["Frank Bruni"],
        image: "https://images-na.ssl-images-amazon.com/images/I/71SeW01C8kL.jpg",
        rating: 5,
        numberrating: 58
    },
    {
        id: 26,
        title: "A Good Girl's Guide to Murder",
        authors: ["Holly Jackson"],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4052/9781405293181.jpg",
        rating: 4,
        numberrating: 203686
    },
    {
        id: 27,
        title: "Before the Coffee Gets Cold",
        authors: ["Toshikazu Kawaguchi "],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5290/9781529029581.jpg",
        rating: 3,
        numberrating: 80262
    },
    {
        id: 28,
        title: "Conversations on Love : with Philippa Perry, Dolly Alderton, Roxane Gay, Stephen Grosz, Esther Perel, and many more",
        authors: ["Natasha Lunn"],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2414/9780241448748.jpg",
        rating: 4,
        numberrating: 1632
    },
    {
        id: 29,
        title: "The Elements of Investing : Easy Lessons for Every Investor",
        authors: [" Burton G. Malkiel", "Charles D. Ellis "],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/1198/9781119851417.jpg",
        rating: 4,
        numberrating: 25
    },
    {
        id: 30,
        title: "The Design Thinking Playbook : Mindful Digital Transformation of Teams, Products, Services, Businesses and Ecosystems",
        authors: ["Michael Lewrick", "Patrick Link", "Larry Leifer"],
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/1194/9781119467472.jpg",
        rating: 4,
        numberrating: 303
    }
];
//# sourceMappingURL=index.js.map