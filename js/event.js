window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header-search').addEventListener('click', function () {
    document.querySelector('#header-event-search').classList.add('search-is-active')
  })
  document.querySelector('#header-burger').addEventListener('click', function () {
    document.querySelector('#header-event-burger').classList.add('burger-is-active')
  })
  document.querySelector('#header-event-close1').addEventListener('click', function () {
    document.querySelector('#header-event-search').classList.remove('search-is-active')
  })
  document.querySelector('#header-event-close2').addEventListener('click', function () {
    document.querySelector('#header-event-burger').classList.remove('burger-is-active')
  })
})
