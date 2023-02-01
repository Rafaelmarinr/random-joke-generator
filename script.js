const btnGetJoker = document.querySelector('#btn')
      jokerContainer = document.querySelector('#joker');

const mostrar = ()=>{
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            data.setup != undefined ? jokerContainer.innerText = data.setup : jokerContainer.innerText = data.joke
        })
    }
btnGetJoker.addEventListener('click',()=>{
    mostrar()
})
mostrar();