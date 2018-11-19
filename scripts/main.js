const {eventListener, inform} = require('')
const { read, write } = require('')
const { render, append } = require('')


//RENDER DATA HERE ON INITIAL BROWSER LOAD
const submit = document.querySelector('#submit')
const title = document.querySelector('#title')
const content = document.querySelector('#content')

submit.addEventListener('click', function () {
  title.value = ''
  content.value = ''
}, false)


eventListener('.cancel-post', 'click', (e) => {
  e.preventDefault()
  document.querySelector('#form').classList.add('is-hidden')
})

eventListener('#form', 'submit', (e) => {
  e.preventDefault()
  e.target.classList.add('is-hidden')


const article = {
  id: '',
  title: e.target.title.value,
  content: e.target.title.value
}




create(blogEntry)
    .then(read)
    .then(response => {
      render(response.data)
      inform('#notice', 'New Entry Has Been Posted', 2000)
    })
    .catch(error => notify('#errorWindow', 'All Fields are Required', 2500))

  e.target.reset()
})

read().then(response => renderPost(response.data))
// // ADD THE UNIQUE ID HERE IN ORDER TO EDIT IT
// const msgBody = document.querySelector(msgID)
// const edit = document.querySelector('#edit')
// edit.addEventListener('click', function(){

// })


// // ADD THE UNIQUE ID HERE IN ORDER TO DELETE IT
// const 
// const del = document.querySelector('#delete')
// del.addEventListener('click', function(){

// })