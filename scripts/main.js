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


content.addEventListener('change', function (e) {
  if (title.value && content.value) {
    document.getElementById('newPost').classList.remove('hide')
  }

  submit.addEventListener('click', function (e) {
    if (title.value && content.value) {
      document.querySelector('.message').classList.remove('hide')
      title.value = ''
      content.value = ''
    }
  }, false)

  const newPost = {
    title: title.value,
    content: content.value
  }

  create(newPost)
    .then((response) => {
      return getAll()
    })
    .then((response) => {
      renderPost(response.data)
    })
})
//getOne, update HERE


//ADD EDIT AND DELETE BUTTON EVENTS
function addBtnEvents() {
  const editBtn = document.querySelector('#edit')

  editBtn.addEventListener('click', (e) => {
    post.classList.add('hide')

      .then((response) => {
        editTitle.value = response.data.data.title
        editContent.value = response.data.data.content
      })
  })
}


//RENDER POSTS AND MENU
function renderPost(posts) {
  const postList = posts.map(post => menuTemplate(post))

  postList.innerHTML = menuArr.join('')

  postList.addEventListener('change', (e) => {
    post.classList.remove('hide')

    getAll(postList.value)
      .then((response) => {
        message.innerHTML = postTemplate(response.data.data)
        addBtnEvents()
      })
  })
}