import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

function initializeLightbox() {
  lightbox = new SimpleLightbox('.gallery a', {});
}

function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" />
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

function showError(message) {
  iziToast.error({ title: 'Error', message });
}

export {
  initializeLightbox,
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
};
