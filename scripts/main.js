const {
  getAll,
  getOne,
  create,
  update,
  del
} = require('./posts')
const {
  postTemplate
} = require('./templates')

// PREVENT SUBMISSION OF POST IF NEITHER TITLE NOR CONTENT FIELDS HAVE BEEN POPULATED


//RENDER ALL POSTS INTIALLY
//renderPost, addBtnEvents are functions 
getAll()
  .then((response) => {
    renderPost(response.data)
    addBtnEvents()
  })

//ENABLE POST BUTTON ONCHANGE FROM TITLE AND CONTENT FIELDS
//ONCE THE POST BUTTON HAS BEEN 'CLICKED' REMOVE THE HIDDEN 
//CLASS FROM MESSAGE AND CLEAR THE TITLE AND CONTENTS FIELDS

const submit = document.querySelector('#newPost')
const title = document.querySelector('#title')
const content = document.querySelector('#content')

submit.addEventListener('click', function (e) {
  if (title.value && content.value) {
    document.getElementById('newPost').removeAttribute('disabled')
    document.querySelector('.message').classList.remove('hidden')
    title.value = ''
    content.value = ''
  }
}, false)

