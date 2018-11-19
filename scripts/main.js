const {
  getAll,
  getOne,
  create,
  update,
  del
} = require('./posts')


// RENDER DATA HERE ON INITIAL BROWSER LOAD
const submit = document.querySelector('#submit')
const title = document.querySelector('#title')
const content = document.querySelector('#content')

getAll()
  .then((response) => {
    renderOptions(response.data)
    addButtonEvents()
  })

// PREVENT SUBMISSION OF POST IF NEITHER TITLE NOR CONTENT FIELDS HAVE BEEN POPULATED
submit.addEventListener('submit', (e) => {
  if (!e.target.title.value || !e.target.content.value) {
    e.target.attribute.remove('disabled')
  }
})

  // CLEARS TEXT AREA AFTER SUBMITTING SUCCESSFUL SUBMISSION,
  submit.addEventListener('click', function () {
    title.value = ''
    content.value = ''
  }, false)
