const axios = require('axios')
const heroku = 'https://secret-scrubland-84127.herokuapp.com/posts'


function getAll() {
  return axios.get(heroku)
}

function getOne(id) {
  return axios.get(heroku + '/' + id)
}

function create(newPost) {
  return axios.post(heroku, newPost)
}

function update(id, newPost) {
  return axios.put(heroku + '/' + id, newPost)
}

function del(id) {
  return axios.delete(heroku + '/' + id)
}
module.exports = {
  getAll,
  getOne,
  create,
  update,
  del
}