document.addEventListener('DOMContentLoaded', function () {
  const gallerySelect =() => {
      const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  };

  gallerySelect();
})
