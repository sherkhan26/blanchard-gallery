document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__accordion-btn').forEach(function (tBtn) {
    tBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function (tContent) {
        tContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.catalog__accordion').forEach(function (aEl) {
    aEl.style.display = 'flex'
    aEl.style.justifyContent = 'space-between'
    aEl.style.alignItems = 'center'
    aEl.style.margin = '0'
    aEl.style.padding = '20px 0'
    aEl.style.backgroundColor = 'transparent'
    aEl.style.border = 'none'
    aEl.style.borderTop = '1px solid var(--ca-color)'
    aEl.style.borderRadius = '0'
    aEl.style.fontWeight = '600'
    aEl.style.fontSize = '18px'
    aEl.style.lineHeight = '32px'
    aEl.style.color = 'var(--bl-color)'
  })

  document.querySelectorAll('.catalog__accordion-name').forEach(function (anEl) {
    anEl.style.padding = '0'
    anEl.style.border = 'none'
    anEl.style.overflowY = 'hidden'
  })

  //document.querySelector('.catalog__accordion-bottom').style.borderBottom = '1px solid var(--ca-color)'

  $( "#accordion1" ).accordion({
    collapsible: true,
    active: false,
  });
  $( "#accordion2" ).accordion({
    collapsible: true,
    active: false,
  });
  $( "#accordion3" ).accordion({
    collapsible: true,
  });
  $( "#accordion4" ).accordion({
    collapsible: true,
    active: false,
  });
  $( "#accordion5" ).accordion({
    collapsible: true,
    active: false,
  });
});
