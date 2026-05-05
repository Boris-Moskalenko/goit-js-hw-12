import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = form.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ message: "Enter search query!" });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      iziToast.error({
        message: "Something went wrong. Try again!",
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});
