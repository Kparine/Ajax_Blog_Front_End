const submit = document.querySelector('#submit')
const title = document.querySelector('#title')
const content = document.querySelector('#content')

submit.addEventListener('click', function () {
  title.value = ''
  content.value = ''
}, false)


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