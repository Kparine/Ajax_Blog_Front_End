function menuTemplate({
  id,
  title
}) {
  return `<li class="menuArr"><a data-id="${id}">${title}</a></li>`
}

function postTemplate({
  id,
  title,
  content
}) {
  return `
  <article class="message">
  <div class="message-header">
    <p class='titleEdit'> ${ title }</p><span>🌧️</span>
    <div class="field is-grouped">
      <p class="control">
        <button class="butt on is-inverted is-outlined is-small is-rounded align-right" id="edit">EDIT</button>
      </p>
      <p class="control">
        <button class="delete" aria-label="delete" data-id=${id} id="del"></button>
      </p>
    </div>
  </div>
  <div class="message-body">
  ${ content }
</div>
</article>
  `
}

function updateTemplate({
  id
}) {
  return `
<a class="button" id="update" data-id=${id}>
<span class="error-msg"></span>
<span class="icon is-small">
  <i class="fas fa-edit"></i>
</span>
<span id="span">UPDATE</span>
</a>
<a class="button" id="cancel">
<span class="error-msg"></span>
<span class="icon is-small">
  <i class="fas fa-times"></i>
</span>
<span>CANCEL</span>
</a>
`
}

function postButtonTemplate() {
  return ` 
  <a class="button" id="newPost">
  <span class="error-msg"></span>
  <span class="icon is-small">
    <i class="fas fa-check"></i>
  </span>
  <span>POST</span>
</a>
  `
}

module.exports = {
  postTemplate,
  menuTemplate,
  updateTemplate,
  postButtonTemplate
}