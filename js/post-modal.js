import { photoDescription } from "./pictures.js";
import { createComment } from "./data.js";

const pictures = document.querySelectorAll(".picture");
const bigPicture = document.querySelector(".big-picture");
const bigPictureImg = document.querySelector(".big-picture__img img");
const likesCount = document.querySelector(".likes-count");
const commentsCount = document.querySelector(".comments-count");
const caption = document.querySelector(".social__caption");
const commentsContainer = document.querySelector(".social__comments");
const cancelPicture = document.querySelector(".big-picture__cancel");
const socialCommentsCount = document.querySelector(".social__comment-count");
const commentsLoader = document.querySelector(".comments-loader");
const bodyElement = document.querySelector("body");

function openBigPicture(userPhoto) {
  bigPicture.classList.remove("hidden");
  socialCommentsCount.classList.add("hidden");
  commentsLoader.classList.add("hidden");
  bodyElement.classList.add("modal-open");

  commentsContainer.innerHTML = "";

  bigPictureImg.src = userPhoto.url;
  likesCount.textContent = userPhoto.likes;
  commentsCount.textContent = userPhoto.comments.length;
  caption.textContent = userPhoto.description;

  renderComments(userPhoto.comments);
}

function closeBigPicture() {
  bigPicture.classList.add("hidden");
  bodyElement.classList.remove("modal-open");
}

function renderComments(comments) {
  comments.forEach((comment) => {
    const newComment = createComment(comment.avatar, comment.name, comment.message);
    commentsContainer.appendChild(newComment);
  });
}

pictures.forEach((pic, key) => {
  pic.addEventListener("click", () => {
    const userPhoto = photoDescription[key];
    openBigPicture(userPhoto);
  });

  pic.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      closeBigPicture();
    }
  });
});

cancelPicture.addEventListener("click", () => {
  closeBigPicture();
});
