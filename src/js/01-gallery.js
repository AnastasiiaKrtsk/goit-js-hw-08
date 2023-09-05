// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function createGallery(items) {
  const galleryList = document.querySelector('.gallery');
  const galleryMarkup = items
    .map(
      item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `
    )
    .join('');
  galleryList.innerHTML = galleryMarkup;
}
createGallery(galleryItems);
console.log(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

document.querySelector('.gallery').addEventListener('click', event => {
  event.preventDefault();
  const target = event.target;
  const imageElement = target.closest('.gallery__image');
  if (imageElement) {
    const largeImageURL = imageElement.dataset.source;
    const instance = gallery.open({
      items: [
        {
          src: largeImageURL,
          type: 'image',
        },
      ],
    });
  }
});
