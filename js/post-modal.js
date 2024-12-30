import { createComment } from "./data.js";

const bigPicture = document.querySelector(".big-picture");
const bigPictureImg = document.querySelector(".big-picture__img img");
const likesCount = document.querySelector(".likes-count");
const commentsCount = document.querySelector(".comments-count");
const caption = document.querySelector(".social__caption");
const commentsContainer = document.querySelector(".social__comments");
const cancelPicture = document.querySelector(".big-picture__cancel");
const socialCommentsCount = document.querySelector(".social__comment-count");
const socialCommentsLoader = document.querySelector(".social__comments-loader");
const bodyElement = document.querySelector("body");
const COMMENTS_ON_PAGE = 5;
let currentCommentsCount = 0;
let allComments = [];

const openBigPicture = (userPhoto) => {
  bigPicture.classList.remove("hidden");
  bodyElement.classList.add("modal-open");

  commentsContainer.innerHTML = "";

  bigPictureImg.src = userPhoto.url;
  likesCount.textContent = userPhoto.likes;
  commentsCount.textContent = userPhoto.comments.length;
  caption.textContent = userPhoto.description;

  allComments = userPhoto.comments;
  currentCommentsCount = 0;

  renderComments();
};

const closeBigPicture = () => {
  bigPicture.classList.add("hidden");
  bodyElement.classList.remove("modal-open");
};

function renderComments() {

  function renderNextComments() {
    const nextComments = allComments.slice(currentCommentsCount, currentCommentsCount + COMMENTS_ON_PAGE);
    nextComments.forEach((comment) => {
      const newComment = createComment(comment.avatar, comment.name, comment.message);
      commentsContainer.appendChild(newComment);
    });

    currentCommentsCount += nextComments.length;
    updateCommentsCount();
    checkLoaderVisibility();
  }

  socialCommentsLoader.classList.remove("hidden");
  renderNextComments();
}

function updateCommentsCount() {
  socialCommentsCount.innerHTML = `${currentCommentsCount} из <span class="comments-count">${allComments.length}</span> комментариев`;
}

function checkLoaderVisibility() {
  if (currentCommentsCount >= allComments.length) {
    socialCommentsLoader.classList.add("hidden");
  }
}

function handlePhotoClick(photos) {
  const pictures = document.querySelectorAll(".picture");

  pictures.forEach((pic, key) => {
    pic.addEventListener("click", () => {
      const userPhoto = photos[key];
      openBigPicture(userPhoto);
    });
  });
}

cancelPicture.addEventListener("click", closeBigPicture);

socialCommentsLoader.addEventListener("click", renderComments);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeBigPicture();
  }
});

export {handlePhotoClick};
