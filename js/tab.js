document.addEventListener('DOMContentLoaded', function () {
  $( function() {
    const flagBtns = document.querySelectorAll('.catalog__tabs-btn');

    flagBtns.forEach(function (tabsBtn) {
      document.querySelectorAll('.catalog__tabs-btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
          const path = event.currentTarget.dataset.path
          document.querySelectorAll('.catalog__tab-content').forEach(function (tabContent) {
            tabContent.classList.remove('catalog__tab-visible')
          })
          document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tabContent) {
            tabContent.classList.add('catalog__tab-visible')
          })

          $('.accordion').accordion('refresh');
          flagBtns.forEach(el => {
            el.classList.remove('catalog__tabs-active');
          });

          this.classList.add('catalog__tabs-active');
        })
      })
    })
    document.querySelectorAll('.events__tabs-btn').forEach(function (eventsTabsBtn) {
      eventsTabsBtn.addEventListener('click', function (events) {
        const path = events.currentTarget.dataset.path
        document.querySelectorAll('.events__tab-content').forEach(function (eventTabContent) {
          eventTabContent.classList.remove('events__tab-visible')
        })
        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (eventTabVisible) {
          eventTabVisible.classList.add('events__tab-visible')
        })
      })
    })

    document.querySelectorAll('.events__tabs-btn').forEach(function (eventsTabNot) {
      eventsTabNot.addEventListener('click',function (eveNot) {
        document.querySelectorAll('.events__tabs-btn').forEach(function (eTabNot) {
          eTabNot.classList.add('events__tabs-btn-not')
        })
      })
    })
  });
})

