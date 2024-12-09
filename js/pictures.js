import { createPhotoDescription } from "./data.js";

const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");
const picturesContainer = document.querySelector(".pictures");

const photoDescription = createPhotoDescription();

const pictureFragment = document.createDocumentFragment();


photoDescription.forEach((pic) => {
  const userPicture = pictureTemplate.cloneNode(true);
  userPicture.querySelector(".picture__img").src = pic.url;
  userPicture.querySelector(".picture__img").alt = pic.description;
  userPicture.querySelector(".picture__likes").textContent = pic.likes;
  userPicture.querySelector(".picture__comments").textContent = pic.comments.length;
  pictureFragment.appendChild(userPicture);
});

picturesContainer.appendChild(pictureFragment);
