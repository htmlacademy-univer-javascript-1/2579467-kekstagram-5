import { createPhotoDescription } from "./data.js";

const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");
const picturesContainer = document.querySelector("section.pictures");

const photoDescription = createPhotoDescription();

photoDescription.forEach((pic) => {
  const userPicture = pictureTemplate.cloneNode(true);
  userPicture.querySelector(".picture__img").src = pic.url;
  userPicture.querySelector(".picture__img").alt = pic.description;
  userPicture.querySelector(".picture__likes").textContent = pic.likes;
  userPicture.querySelector(".picture__comments").textContent = pic.comments.length;
  picturesContainer.appendChild(userPicture);
});


