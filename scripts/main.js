const {
  getAll,
  getOne,
  create,
  update,
  del
} = require('./posts')
const {
  postTemplate,
  menuTemplate,
  updateTemplate,
  postButtonTemplate
} = require('./templates')

////////////////////////////////////////////////////////////////////////////////////////////
//                                     GET ALL
////////////////////////////////////////////////////////////////////////////////////////////
getAll()
  .then((response) => {
    renderPost(response.data.data)
  })

///////////////////////////////////////////////////////////////////////////////////////////
// 1. ENABLE POST BUTTON ONCHANGE FROM TITLE AND CONTENT FIELDS
// 2. ONCE THE POST BUTTON HAS BEEN 'CLICKED' REMOVE THE HIDDEN 
// CLASS FROM MESSAGE AND CLEAR THE TITLE AND CONTENTS FIELDS
////////////////////////////////////////////////////////////////////////////////////////////
const title = document.querySelector('#title')
const content = document.querySelector('#content')
const postList = document.querySelector('.menu-list')
const message = document.querySelector('.message')

title.addEventListener('keyup', checkValid)
content.addEventListener('keyup', checkValid)

function checkValid(e) {
  if (title.value && content.value) {
    renderPostButton()
    const submit = document.querySelector('#newPost')
    submit.addEventListener('click', handleSubmit)
  }
}

function handleSubmit() {
  if (title.value && content.value) {
    document.querySelector('.message').classList.remove('hide')


    const newPost = {
      title: title.value,
      content: content.value
    }

    create(newPost)
      .then((response) => {
        displayOne(response.data)
        addBtnEvents()
        return getAll()
      })
      .then((response) => {
        renderPost(response.data.data)
      })
    title.value = ''
    content.value = ''
  }
}
////////////////////////////////////////////////////////////////////////////////////////////
// GET ONE
// 1. CHOOSE ONE FROM SIDE MENU LIST (id) AND DISPLAY BELOW TEXT AREA (ONLY DISPLAYING ONE)
////////////////////////////////////////////////////////////////////////////////////////////
const grab = document.querySelector('.menu-list')

grab.addEventListener('click', selectPost)

function selectPost(e) {
  document.querySelector('.message').classList.remove('hide')
  getOne(e.target.getAttribute('data-id'))

    .then((response) => {
      displayOne(response.data.data)
      return getAll()
    })
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                    EDIT POST
// 1. GRAB THE CONTENTS OF THE POST AND PUT THEM INTO THE MESSAGE TEMPLATE
////////////////////////////////////////////////////////////////////////////////////////////
function editPost(post) {
  document.querySelector('.message').classList.add('hide')

  displayButton(post)

  const titleHeader = document.querySelector('.titleEdit')
  const contentBody = document.querySelector('.message-body')
  const title = document.querySelector('#title')
  const content = document.querySelector('.textarea')

  title.removeEventListener('keyup', checkValid)
  content.removeEventListener('keyup', checkValid)

  getAll(postList.value)
    .then((response) => {
      title.value = titleHeader.innerHTML
      content.value = contentBody.innerHTML
    })

}

// SUBMIT EDIT
function updatePost(e) {
  const titleHeader = document.querySelector('.titleEdit')
  const contentBody = document.querySelector('.message-body')
  const title = document.querySelector('#title')
  const content = document.querySelector('.textarea')

  title.addEventListener('keyup', checkValid)
  content.addEventListener('keyup', checkValid)

  update(this.getAttribute('data-id'), {
    title: title.value,
    content: content.value
  }).then((response) => {
    getAll(postList.value)
    .then((response) => {
      title.value = ''
      content.value = ''
    })
  })
}

// CANCEL EDIT
function cancelEdit(e) {
  document.querySelector('#update').classList.add('hide')
  document.querySelector('#cancel').classList.add('hide')
  document.querySelector('.message').classList.remove('hide')

  title.addEventListener('keyup', checkValid)
  content.addEventListener('keyup', checkValid)

  title.value = ''
  content.value = ''
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                    DELETE
// 1. DELETE WILL REMOVE MESSAGE (ALSO FROM LIST) AND DISPLAY LATEST POST
////////////////////////////////////////////////////////////////////////////////////////////
function removePost(e) {
  del(e.target.getAttribute('data-id'))
    .then((response) => {
      message.innerHTML = ''
      return getAll()
    })
    .then((response) => {
      renderPost(response.data.data)
    })
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                ADD BUTTON EVENTS
////////////////////////////////////////////////////////////////////////////////////////////
function addBtnEvents(post) {
  const delBtn = document.querySelector('#del')
  const editBtn = document.querySelector('#edit')

  delBtn.addEventListener('click', removePost)
  editBtn.addEventListener('click', () => editPost(post))
}

/////////////////////////////////////////////////////////////////////////////////////////////
//                             RENDER POSTS AND MENU ARRAY                      
////////////////////////////////////////////////////////////////////////////////////////////
function renderPostButton() {
  const control = document.querySelector('#updateForm')
  control.innerHTML = postButtonTemplate()

}

function displayButton(post) {

  const control = document.querySelector('#updateForm')
  control.innerHTML = updateTemplate(post)

  const cancelBtn = document.querySelector('#cancel')
  const editSubmit = document.querySelector('#update')

  cancelBtn.addEventListener('click', cancelEdit)
  editSubmit.addEventListener('click', updatePost)
}

function displayOne(post) {
  message.innerHTML = postTemplate(post)
  addBtnEvents(post)
}

function renderPost(posts) {
  const postListHtml = posts.map(post => menuTemplate(post))
  postList.innerHTML = postListHtml.join('')

  postList.addEventListener('change', (e) => {
    newPost.classList.remove('hide')

    getAll(postList.value)
      .then((response) => {
        message.innerHTML = postTemplate(response.data.data)
      })
  })
}