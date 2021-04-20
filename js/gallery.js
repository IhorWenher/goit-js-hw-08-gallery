import images from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const lightboxContainer = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeIcon = document.querySelector('[data-action="close-lightbox"]');
const imagesMarkup = createImageCardsMarkup(images);

/* Разметка*/
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageCardsMarkup(images) {
    return images.map(({ preview, original, description}) => {
        return `
           <li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${original}"
                >
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
          </li>
        `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);


function onGalleryContainerClick(evt) {
    const targetImage = evt.target;
    const targetLink = targetImage.parentNode

    if (!evt.target.classList.contains('gallery__image')) {
       return;
    }

    evt.preventDefault();
    lightboxContainer.classList.add('is-open');
    lightboxImage.setAttribute('src', `${targetLink.href}`);
    lightboxImage.setAttribute('alt', `${targetImage.alt}`);
    console.log(evt.target)
}


closeIcon.addEventListener('click', closeModal);

function closeModal() {
    lightboxContainer.classList.remove('is-open');
    lightboxImage.removeAttribute('src');
    lightboxImage.removeAttribute('alt');
}





/* Перелистування дороблю
const previousImage = document.querySelector('[data-action="previous-image"]');
previousImage.addEventListener('click', previousImage);

const nextImage = document.querySelector('[data-action="next-image"]')
nextImage.addEventListener('click', nextImage);


function nextImage() {
    lightboxImage.setAttribute('src', `${link.href}`);
    lightboxImage.setAttribute('alt', `${image.alt}`);
}

function previousImage() {
    lightboxImage.setAttribute('src', `${link.href}`);
    lightboxImage.setAttribute('alt', `${image.alt}`);
}

*/  

