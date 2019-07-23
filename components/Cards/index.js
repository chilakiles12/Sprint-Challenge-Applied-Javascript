// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // handle success
    console.log(response.data.articles);
    Object.values(response.data.articles).map(item =>
      item.map(item => createCard(item))
    );
  })
  .catch(error => {
    // handle error
    console.log(error);
  });

function createCard(data) {
  const cards = document.querySelector('.cards-container');

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = data.headline;
  cardDiv.appendChild(headline);

  const author = document.createElement('div');
  author.classList.add('author');
  author.textContent = 'author';
  cardDiv.appendChild(author);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  author.appendChild(imgContainer);

  const img = document.createElement('img');
  img.setAttribute('src', data.authorPhoto);
  imgContainer.appendChild(img);
  cards.appendChild(cardDiv);

  return createCard;
}
