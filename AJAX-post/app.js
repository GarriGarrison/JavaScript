const btn = document.querySelector('.btn-get-posts')
const btnAddPost = document.querySelector('.btn-add-post')
const container = document.querySelector('.container')

function getPosts(callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

    // Асинхроная обработка
    xhr.addEventListener('load', () => {
        //console.log('request loaded')
        //console.log(xhr.responseText)
        const response = JSON.parse(xhr.responseText)
        //console.log(response)
        callback(response)
    })

    xhr.addEventListener('error', () => {
        console.log('error')
    })

    xhr.send()
}

function createPost(body, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')

    // Асинхроная обработка
    xhr.addEventListener('load', () => {
        //console.log('request loaded')
        //console.log(xhr.responseText)
        const response = JSON.parse(xhr.responseText)
        //console.log(response)
        callback(response)
    })

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')  //с сайта https://jsonplaceholder.typicode.com/guide/ CREATE A RESOURSE

    xhr.addEventListener('error', () => {
        console.log('error')
    })

    xhr.send(JSON.stringify(body))  //переводим тело запроса (body) в JSON формат и передаём на сервер
}

function cardTemplate(post) {
    const card = document.createElement('div')
    card.classList.add('card')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = post.title
    const article = document.createElement('p')
    article.classList.add('card-text')
    article.textContent = post.body
    cardBody.appendChild(title)
    cardBody.appendChild(article)
    //console.log(cardBody)
    card.appendChild(cardBody)
    
    return card
}

function renderPosts(response) {
    //console.log(response)
    const fragment = document.createDocumentFragment()
    response.forEach(post => {
        const card = cardTemplate(post)
        fragment.appendChild(card)

    })
    container.appendChild(fragment)
}

btn.addEventListener('click', e => {
    getPosts(renderPosts)
})

btnAddPost.addEventListener('click', e => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    createPost(newPost, response => {
        //console.log(response)
        const card = cardTemplate(response)
        //console.log(card)
        container.insertAdjacentElement('afterbegin', card)
    })
})