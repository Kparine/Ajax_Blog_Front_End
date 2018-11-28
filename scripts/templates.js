function menuTemplate({ id, title }) {
  return `<li class="menuArr"><a data-id="${id}">${title}</a></li>`
}

function postTemplate({ id, title, content}) {
  return `
  <article class="message">
  <div class="message-header">
    <p class='titleEdit'> ${ title }</p><span> 🌧️</span>
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

module.exports = { postTemplate, menuTemplate }