import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let page = 1;
let query = "";

form.addEventListener("submit", async event => {
  event.preventDefault();

  query = form.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({
      message: "Enter search query!",
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong!",
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  page += 1;

  hideLoadMoreButton();
  showLoader();
  

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const card = document.querySelector(".gallery-item");
    if (card) {
      const height = card.getBoundingClientRect().height;

      window.scrollBy({
        top: height * 2,
        behavior: "smooth",
      });
    }

    const totalPages = Math.ceil(data.totalHits / 15);

    if (page >= totalPages) {
  hideLoadMoreButton();
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
  });
} else {
  showLoadMoreButton();
}
  } catch (error) {
    iziToast.error({
      message: "Something went wrong!",
    });
  } finally {
    hideLoader();
  }
});