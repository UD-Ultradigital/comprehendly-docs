(function () {
  var path = location.pathname.replace(/\/+$/, '') || '/'
  var inGuides = path.indexOf('/guides/') !== -1
  var r = inGuides ? '..' : '.'
  function fileActive(file) {
    if (file === 'index.html') {
      return /(?:^|\/)(index\.html)?$/.test(path) && path.indexOf('/guides/') === -1 &&
        !/\/(start|authentication|concepts|javascript|swift|reference|errors)(\.html)?$/.test(path)
    }
    return path.endsWith('/' + file) || path.endsWith(file)
  }
  function item(href, label) {
    return '<a href="' + r + '/' + href + '"' + (fileActive(href) ? ' class="active"' : '') + '>' + label + '</a>'
  }
  var nav = document.getElementById('nav')
  if (!nav) return
  nav.innerHTML =
    '<a class="brand" href="' + r + '/index.html">Comprehendly docs</a>' +
    '<p class="label">Get started</p>' +
    item('index.html', 'Introduction') +
    item('start.html', 'Quickstart') +
    item('authentication.html', 'Authentication') +
    item('concepts.html', 'Concepts') +
    '<p class="label">How-to</p>' +
    item('guides/render-a-form.html', 'Render a form') +
    item('guides/bind-host-fields.html', 'Bind existing fields') +
    item('guides/voice.html', 'Fill with voice') +
    item('guides/save-a-submission.html', 'Save a submission') +
    '<p class="label">SDKs</p>' +
    item('javascript.html', 'JavaScript') +
    item('swift.html', 'Swift') +
    '<p class="label">Reference</p>' +
    item('reference.html', 'API') +
    item('errors.html', 'Errors') +
    '<a href="' + r + '/spec/openapi.yaml">OpenAPI</a>'
})()
