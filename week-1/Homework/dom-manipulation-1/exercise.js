/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const pSelector = document.querySelectorAll("p");
console.log(pSelector);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const firstId = document.querySelector("#jumbotron-text");
console.log(firstId);

const pSelectorPrimary = document.querySelectorAll(".primary-content p");
console.log(pSelectorPrimary);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeBackground = document.querySelector("#bgrChangeBtn");
changeBackground.addEventListener("click", () => {
  const htmlElement = document.querySelector("body");
  htmlElement.style.backgroundColor = "#0aaaaa";
});
/*

Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addParagraphButton = document.querySelector("#addTextBtn").addEventListener("click", () => {
  const sectionToAddParagraph = document.querySelector("#mainArticles");
  const addParagraph = document.createElement("p");
  addParagraph.innerText ='Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  sectionToAddParagraph.appendChild(addParagraph);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const lagerTextButton = document
  .querySelector("#largerLinksBtn")
  .addEventListener("click", () => {
    const largerText = Array.from(document.querySelectorAll("a"));
    largerText.forEach(function (item) {
      item.style.fontSize = "larger";
    });
  });

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addArticleButton = document.querySelector('#addArticleBtn');
addArticleButton.addEventListener('click', () => {
  const sectionToAddParagraph = document.querySelector('#mainArticles');
  const addParagraph = document.createElement('p');
  const addArticle = document.querySelector('.addArticle');
  addParagraph.innerText = addArticle.value;
  sectionToAddParagraph.appendChild(addParagraph);
  addArticle.value = '';
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors = ['#11aaaa', '#22bbbb', '#33cccc', '#44dddd', '#55eeee'];
const changeArrayBackground = document.querySelector('body');
let clickIndex = 0;

changeBackground.addEventListener('click', () => {
  if (clickIndex < colors.length) {
    clickIndex++;
  } else {
    clickIndex = 0;
  }
  changeArrayBackground.style.backgroundColor = colors[clickIndex];
});
