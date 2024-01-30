import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const formEl = document.querySelector('.feedback-form');
const listEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const modal = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
async function fetchImage(q) {
  const API_KEY = '42040031-47a3b216d4f97a43df3da958a';
  const PARAMS = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const BASE_URL = 'https://pixabay.com/api';
  const url = `${BASE_URL}/?${PARAMS}`;

  try {
    const respons = await axios.get(url, PARAMS);

    return respons.data.hits;
  } catch (error) {
    throw new Error(response.status);
  }
}

formEl.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  loader.classList.remove('is-hidden');
  listEl.innerHTML = '';
  const serchQuery = e.currentTarget.elements.search.value.trim();
  try {
    const arr = await fetchImage(serchQuery);
    console.log(arr);
    // if (arr.length !== 0) {
    listEl.innerHTML = markUp(arr);
    modal.refresh();
    loader.classList.add('is-hidden');
    // }
  } catch (error) {
    iziToast.error({
      position: 'center',
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
}

function markUp(arr) {
  return arr
    .map(
      ({ webformatURL, largeImageURL, tags, comments, likes, downloads }) => {
        return `<li class="item"> 
     <a href='${largeImageURL}'><img class="image" src="${webformatURL}" alt="" /></a>
     <div class="box-text"> 
     <div>
     <h2 class="main-text">comments</h2>
      <p class="text">${comments}</p>
      </div>
      <div>
      <h2 class="main-text">tags</h2>
      <p class="text">${tags}</p>
     </div>
     <div>
      <h2class="main-text">likes</h2class=>
      <p class="text">${likes}</p>
      </div>
      <div>
      <h2 class="main-text">downloads</h2>
      <p class="text">${downloads}</p>
      </div>
      </div>
      </li>`;
      }
    )
    .join('');
}
