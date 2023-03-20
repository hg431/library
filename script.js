const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  }


// Function to loop through myLibrary array and display each book on the page in its own card
const div = document.getElementById('container');
function renderCards() {
  let i = 0;
  div.innerHTML = '';
  while (i < myLibrary.length) {
    const newDiv = document.createElement('div');
    newDiv.className = 'card';
    newDiv.id = i;
    newDiv.innerHTML = `<h2><img src="book-open-variant.svg" alt="Book" />${myLibrary[i].title}</h2>
            <p>By ${myLibrary[i].author}</p>
            <p>${myLibrary[i].pages} pages</p>
            <p>Read <label class="switch">
                <input type="checkbox" class="read" ${myLibrary[i].read} onclick="toggleRead(${i})">
                <span class="slider round"></span>
            </label>
            </p>
            <img src="trash-can-outline.svg" alt="Delete book" class="delete" onclick="bin(${i})" />`;
    div.appendChild(newDiv);
    i++;
  }
}

// Click the add book button
function addBookToLibrary() {
  event.preventDefault();
  // Check the status of the read toggle
  function checkRead() {
    return (document.getElementById('read').checked ? 'checked' : '');
  }
  // Create an object for the new book
  const newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    checkRead(),
  );
    // Add the object to the array
  myLibrary.push(newBook);
  // Refresh all the cards
  renderCards();
}

// Toggle visibility of the new book box
function showNewBook() {
  document.getElementById('newbook').style.display = 'block';
}
function hideNewBook() {
  document.getElementById('newbook').style.display = '';
}

// Delete the card
function bin(e) {
  document.getElementById(e).remove();
  myLibrary.splice(e, 1);
  renderCards();
}

// Toggle the read switch in a card
function toggleRead(e) {
  if (document.getElementById(e).getElementsByClassName('read')[0].checked == true) {
    myLibrary[e].read = 'checked';
  } else {
    myLibrary[e].read = '';
  }
}
