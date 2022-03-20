let wishlistcount = 0;

function fillBooks(books) {
  const list = document.getElementById("list");
  for (idx in books) {
    const li = document.createElement("li");

    const DOM_image = document.createElement("img");
    DOM_image.src = books[idx].image;

    const DOM_title = document.createElement("p");
    DOM_title.innerText = books[idx].title;

    const DOM_author = document.createElement("p");
    DOM_author.innerText = books[idx].authors;

    const DOM_rating = document.createElement("span");
    DOM_rating.classList.add("fa", "fa-star", "checked");

    const DOM_numberrating = document.createElement("p");
    DOM_numberrating.innerText = books[idx].numberrating;

    const DOM_category = document.createElement("p");
    DOM_category.innerText = books[idx].category;
    DOM_category.className = "selectCategory";

    li.appendChild(DOM_image);
    li.appendChild(DOM_title);
    li.appendChild(DOM_author);
    li.appendChild(DOM_numberrating);
    li.appendChild(DOM_category);

    for (let i = 0; i < books[idx].rating; i++) {
      const DOM_rating = document.createElement("span");
      DOM_rating.classList.add("fa", "fa-star", "checked");
      li.appendChild(DOM_rating);
    }

    li.classList.add("bookcard");

    var Wishlist = document.getElementById("Wishlist");
    var DOM_Wishlist = document.createElement("li");
    const WishButton = document.createElement("button");
    WishButton.innerHTML = "Button";
    WishButton.type = "Button";
    WishButton.innerText = "Add to Wishlist";
    WishButton.classList.add("WishBtn");
    WishButton.onclick = function () {
      if (this.innerText == "Add to Wishlist") {
        this.innerText = "Remove from Wishlist";

        var a = document.getElementById("Wishlist");
        var li = document.createElement("li");
        li.setAttribute("id", this.parentElement.children[1].innerText);
        li.appendChild(
          document.createTextNode(this.parentElement.children[1].innerText)
        );
        a.appendChild(li);
      } else {
        this.innerText = "Add to Wishlist";
        var a = document.getElementById("Wishlist");
        var item = document.getElementById(
          this.parentElement.children[1].innerText
        );
        a.removeChild(item);
      }
    };
    li.append(WishButton);
    list.append(li);
  }
}

function loadBooks() {
  fetch("books.json")
    .then((data) => data.json())
    .then((books) => fillBooks(books));
}

function loadChart() {
  fetch("books.json")
    .then((data) => data.json())
    .then((books) => ReturnChart(books));
}

function loadAve() {
  fetch("books.json")
    .then((data) => data.json())
    .then((books) => Ave(books));
}

function JsonAddBook() {
  fetch("books.json")
    .then((data) => data.json())
    .then((books) => addNewBook(books));
}

function countBook() {
  fetch("books.json")
    .then((data) => data.json())
    .then((books) => countBooks(books));
}

window.onload = () => {
  loadBooks();
  loadChart();
  loadAve();
  JsonAddBook();
  countBook();
};

function myFunction() {
  // Declare variables
  var input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("query");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Choose category when adding book
function myFunction3() {
  document.getElementById("choose_category").classList.toggle("show");
}

function showDrama() {
  let cat = document.getElementById("choose_cat");
  cat.innerHTML = "Drama";
}

function showHistoricalRomance() {
  let cat = document.getElementById("choose_cat");
  cat.innerHTML = "Non-fiction";
}

function showScienceFiction() {
  let cat = document.getElementById("choose_cat");
  cat.innerHTML = "Science Fiction";
}

//Authors list
const authors = {};

for (const idx in books) {
  if (authors[idx]) {
    authors[idx].append(books[idx].id);
  } else {
    authors[idx] = [books[idx].id];
  }
}

//Add new object (book) to json file
function addNewBook(books) {
  let new_id = len(books + 1);
  let new_title = document.getElementsByClassName("title_").value;
  let new_image = document.getElementsByClassName("image_").value;
  let new_rating = document.getElementsByClassName("rating_").value;
  let new_numberrating = document.getElementsByClassName("numberrating_").value;

  var newBook = {
    id: new_id,
    title: new_title,
    authors: new_author,
    image: new_image,
    rating: new_rating,
    numberrating: new_numberrating,
  };

  if (
    new_title != " " &&
    new_author != " " &&
    new_image != " " &&
    new_rating != " " &&
    new_numberrating != ""
  ) {
    books.push(newBook);

    new_title = " ";
    new_image = " ";
    new_rating = " ";
    new_numberrating = " ";
  } else {
    alert("All boxes need to be filled!");
  }
}

// For Statistics

var barColors = [
  "rgba(0,0,255,1.0)",
  "rgba(0,0,255,0.8)",
  "rgba(0,0,255,0.6)",
  "rgba(0,0,255,0.4)",
  "rgba(0,0,255,0.2)",
];

function ReturnChart(books) {
  var data = [0, 0, 0, 0, 0];
  for (r in books) {
    if (books[r].rating == 5) {
      data[4] += 1;
    } else if (books[r].rating == 4) {
      data[3] += 1;
    } else if (books[r].rating == 3) {
      data[2] += 1;
    } else if (books[r].rating == 2) {
      data[1] += 1;
    } else {
      data[0] += 1;
    }
  }
  var chart = new Chart(document.getElementById("myHist"), {
    type: "bar",
    data: {
      labels: ["1⭐", "2⭐", "3⭐", "4⭐", "5⭐"],
      datasets: [
        {
          label: "N. of books",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: data,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Number of books per rating",
      },
    },
  });
  return chart;
}

function Ave(books) {
  var ave = 0;
  var total = 0;
  for (i in books) {
    ave += books[i].rating;
    total += 1;
  }
  var a = [0];
  a[0] = ave / total;
  var chart = new Chart(document.getElementById("myAve"), {
    type: "horizontalBar",
    data: {
      labels: ["Average⭐"],
      datasets: [
        {
          label: "Average Rate",
          backgroundColor: ["#3e95cd"],
          data: a,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
  });
  return chart;
}

//Count books

function countBooks(books) {
  var countDrama = 0;
  var countNon = 0;
  var countScience = 0;

  for (i in books) {
    if (books[i].category == "Drama") {
      countDrama += 1;
    } else if (books[i].category == "Non-fiction") {
      countNon += 1;
    } else {
      countScience += 1;
    }
  }

  document.getElementById("drama").innerHTML += "(" + countDrama + ")";
  document.getElementById("scienceFiction").innerHTML +=
    "(" + countScience + ")";
  document.getElementById("nonFiction").innerHTML += "(" + countNon + ")";
}

//Show books by category

function showDrama() {
  var ul = document.getElementById("list");
  var li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    const p = document.getElementsByClassName("selectCategory");
    var txtValue = p.textContent || p.innerText;
    if (txtValue != "Drama") {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function showNonFiction() {
  var ul = document.getElementById("list");
  var li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    const p = document.getElementsByClassName("selectCategory");
    var txtValue = p.textContent || p.innerText;
    if (txtValue != "Non-fiction") {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function showScience() {
  var ul = document.getElementById("list");
  var li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    const p = document.getElementsByClassName("selectCategory");
    var txtValue = p.textContent || p.innerText;
    if (txtValue != "Science Fiction") {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
