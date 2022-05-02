/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector('#content');

  arrayOfPeople.forEach((item) => {
    const nameTag = document.createElement('h1');
    const userName = document.createTextNode(item.name);
    nameTag.appendChild(userName);
    content.appendChild(nameTag);

    const jobTag = document.createElement('h2');
    const jobTitle = document.createTextNode(item.job);
    jobTag.appendChild(jobTitle);
    content.appendChild(jobTag);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  //Write your code in here
  const content = document.querySelector('#content');
  const shopList = document.createElement('ul');
  shopList.style.borderTop = '3px solid #bbb';
  shopping.forEach((item) => {
    const items = document.createElement('li');
    const itemToBuy = document.createTextNode(item);
    content.appendChild(shopList);
    shopList.appendChild(items);
    items.appendChild(itemToBuy);
  });
}

/**
    I'd like to display my three favorite books inside a nice webpage!
    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
          }
        ];
    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).
    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
    **/
function exerciseThree(books) {
  const imgBook1 = 'https://m.media-amazon.com/images/I/81zpLhP1gWL.jpg';
  const imgBook2 = 'https://m.media-amazon.com/images/I/41Z56GwEv9L.jpg';
  const imgBook3 = 'https://m.media-amazon.com/images/I/41uPjEenkFL.jpg';
  const imagesBooks = [imgBook1, imgBook2, imgBook3];

  const content = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.innerText = 'Book List';
  h1.style.borderTop = '3px solid #bbb';
  content.appendChild(h1);
  const booksList = document.createElement('ul');
  booksList.style.display = 'flex';
  booksList.style.padding = '20px';
  booksList.style.listStyle = 'none';
  booksList.style.flexWrap = 'wrap';
  booksList.style.marginBlockStart = '1em';
  booksList.style.marginBlockEnd = '1em';
  content.appendChild(booksList);

  books.forEach((books, i) => {
    const bookLine = document.createElement('li');
    const bookTitle = document.createElement('p');
    const bookImg = document.createElement('img');
    bookLine.style.margin = '10px';
    bookTitle.innerText = `${books.title} - ${books.author}`;
    bookTitle.style = 'margin:20px';
    bookImg.src = imagesBooks[i++];
    bookImg.style.height = '250px';
    bookImg.style.margin = '20px';

    booksList.appendChild(bookLine);
    bookLine.appendChild(bookTitle);
    bookLine.appendChild(bookImg);

    if (books.alreadyRead) {
      bookLine.style.backgroundColor = 'green';
    } else {
      bookLine.style.backgroundColor = 'red';
    }
  });
}

//
//
//
//
// DO NOT EDIT BELOW HEREange the style of the book depending on whether you have read it (green) or not (red).
//
//
//
//

let people = [
  { name: 'Chris', job: 'Teacher' },
  { name: 'Joanna', job: 'Student' },
  { name: 'Boris', job: 'Prime Minister' }
];

exerciseOne(people);

let shopping = ['Milk', 'Break', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea'];

exerciseTwo(shopping);

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

exerciseThree(books);
