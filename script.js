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

    li.appendChild(DOM_image);
    li.appendChild(DOM_title);
    li.appendChild(DOM_author);
    li.appendChild(DOM_numberrating);

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

window.onload = () => {
  loadBooks();
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
  cat.innerHTML = "Historical Romance";
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
function addNewBook() {
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

  books.push(newBook);
}

// For Statistics

// Rating 

function rating(){
  var lst = []
  for (d in books)
    lst.append(d['rating'])

  const ctx = document.getElementById('histogram').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5],
      datasets: [{
        label: 'Rating',
        data: lst,
        backgroundColor: 'blue',
      }]
    },
    options: {
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 1.3,
          ticks: {
            max: 3,
          }
        }, {
          display: true,
          ticks: {
            autoSkip: false,
            max: 4,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
        }
      }]
    }
  }
})
}
