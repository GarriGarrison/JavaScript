const btn = document.querySelector('button')
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

function renderPosts(response) {
    //console.log(response)
    const fragment = document.createDocumentFragment()
    response.forEach(post => {
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
        fragment.appendChild(card)
    })
    container.appendChild(fragment)
}

btn.addEventListener('click', e => {
    getPosts(renderPosts)
})




// const btn = document.querySelector('button')

// function getPosts(callback) {
//     const xhr = new XMLHttpRequest()
//     console.log(xhr)
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

//     // Асинхроная обработка
//     xhr.addEventListener('load', () => {
//         //console.log('request load')
//         //console.log(xhr.responseText)
//         const response = JSON.parse(xhr.responseText)  //преобразование стоки JSON в массив
//         //console.log(response)
//         callback(response)
//     })

//     // Обработка ошибок
//     xhr.addEventListener('error', () => {
//         console.log('error')
//     })

//     xhr.send()
// }

// btn.addEventListener('clicck', e => {
//     getPosts(response => {
//         //console.log(response)
//         const fragment = document.createDocumentFragment()
//         response.forEach(post => {
            
//         })
//     })
// })

