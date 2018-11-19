function postTemplate({ title, content }) {
  return `<article class="message" id='msg'>
  <div class="message-header">
    <p> ${ title }️🌧️ </p>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-inverted is-outlined is-small is-rounded align-right" id="edit">EDIT</button>
      </p>
      <p class="control">
        <button class="delete" aria-label="delete" id="delete"></button>
      </p>
    </div>
  </div>
  <div class="message-body">
  ${ content }
</div>
</article>
  `
}

module.exports = { postTemplate }