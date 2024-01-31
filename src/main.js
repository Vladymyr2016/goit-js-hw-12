import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const formEl = document.querySelector('.feedback-form');
const listEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.load-more');
let serchQuery;
let totalResults;
const modal = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
let page = 1;
let pageSize;
async function fetchImage(q) {
  const API_KEY = '42040031-47a3b216d4f97a43df3da958a';
  const params = {
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    pageSize: 40,
  };
  const BASE_URL = 'https://pixabay.com/api';
  const url = `${BASE_URL}/`;

  try {
    const respons = await axios.get(url, { params });

    return respons.data.hits;
  } catch (error) {
    throw new Error(response.status);
  }
}

formEl.addEventListener('submit', onSubmit);
btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  page += 1;
  const arr = await fetchImage(serchQuery);
  const markup = markUp(arr);
  listEl.insertAdjacentHTML('beforeend', markup);

  hideLoader();
  changeBtnStatus();
}

function changeBtnStatus() {
  const maxPage = Math.ceil(totalResults / pageSize);

  btnLoadMore.disabled = page >= maxPage;
}

async function onSubmit(e) {
  e.preventDefault();
  loader.classList.remove('is-hidden');
  listEl.innerHTML = '';
  page = 1;
  serchQuery = e.currentTarget.elements.search.value.trim();
  try {
    const arr = await fetchImage(serchQuery);
    if (arr.length === 0) {
      iziToast.error({
        position: 'center',
        title: 'Error',
        message: 'Sorry, we don`t have saerch img!',
      });
      btnLoadMore.classList.add('is-hidden');
    } else {
      listEl.innerHTML = markUp(arr);
      modal.refresh();
      serchQuery = '';
      loader.classList.add('is-hidden');
      btnLoadMore.classList.remove('is-hidden');
    }
  } catch (error) {
    iziToast.error({
      position: 'center',
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  formEl.reset();
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

function showLoader() {
  btnLoadMore.classList.remove('is-hidden');
}
function hideLoader() {
  btnLoadMore.classList.add('is-hidden');
}
