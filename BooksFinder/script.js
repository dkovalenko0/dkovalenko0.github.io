let inputSearch = document.querySelector(".search");
let btnSearch = document.querySelector(".btn-search");
let booksList = document.querySelector(".books-list");

function render({ volumeInfo = {}, accessInfo = {} } = {}) {
  return `
        <li class="books-list__item">
            <img src=${
              volumeInfo.imageLinks.smallThumbnail ||
              "https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png"
            } alt="book" />
            
            <div class="description">
                <h2>${volumeInfo.title || "-"}</h2>
                <h3>Language: ${volumeInfo.language || "-"}</h3>
                <h3>Publisher: ${volumeInfo.publisher || "-"}</h3>
                <h3>Rating: ${volumeInfo.rating || "-"}</h3>
                <h3>Authors: ${volumeInfo.authors || "-"}</h3>
                <a href="${
                  accessInfo.webReaderLink || "#"
                }" target="_blank"  class="read-link">
                    READ
                </a>
            </div>
        </li>
    `;
}

async function getBooks() {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${inputSearch.value}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}

function listener() {
  if (inputSearch.value === "") {
    alert("Please fill the form");
  } else {
    while (booksList.firstChild) {
      booksList.removeChild(booksList.firstChild);
    }

    return getBooks().then((data) =>
      data.items.forEach(function (item) {
        console.log(item);
        booksList.insertAdjacentHTML("afterbegin", render(item));
      })
    );
  }
}

btnSearch.addEventListener("click", listener);
inputSearch.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    return listener();
  }
});
