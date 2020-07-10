// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios';

const cardsContainer = document.querySelector('.cards-container')


function articleCard(article) {

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const byAuthor = document.createElement('span')

    card.className = "card"
    headline.className = "headline"
    author.className = "author"
    imgContainer.className = "img-container"

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(byAuthor)

    headline.textContent = article.headline
    img.src = article.authorPhoto
    byAuthor.textContent = `By ${article.authorName}`

    card.addEventListener('click',() => {
        console.log(article.headline)
    })

    return card
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        Object.values(response.data.articles).forEach(subject => {
            subject.forEach(article => {
                const newCard = articleCard(article)
                cardsContainer.appendChild(newCard)
            })
        })
    })
    .catch(error => {
        console.log(`oh No, something's wrong!:${error}`)
    })
