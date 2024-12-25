import "./photo.js";

const uploadImgInput = document.querySelector(".img-upload__input");
const uploadImgOverlay = document.querySelector(".img-upload__overlay");
const uploadImgCancel = document.querySelector(".img-upload__cancel");
const userForm = document.querySelector(".img-upload__form");
const bodyElement = document.querySelector("body");
const hashtags = userForm.querySelector(".text__hashtags");

let errorMessage = "";

const pristine = new Pristine(userForm, {classTo: "setup-user-form__element", errorTextParent: "setup-user-form__element"});

function openEditingForm() {
  uploadImgOverlay.classList.remove("hidden");
  bodyElement.classList.add("modal-open");
}

function closeEditingfForm() {
  uploadImgOverlay.classList.add("hidden");
  bodyElement.classList.remove("modal-open");
  uploadImgInput.value = "";
}

uploadImgCancel.addEventListener("click", closeEditingfForm);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeEditingfForm();
  }
});

function checkStartsWithHash(value) {
  const allHashtags = value.trim().split(" ");
  return allHashtags.every((tag) => tag === "" || tag.startsWith("#"));
}

function checkUniqueHashtags(value) {
  const allHashtags = value.toLowerCase().trim().split(" ");
  const uniqueHashtags = new Set(allHashtags);
  return allHashtags.length === uniqueHashtags.size;
}
function checkSeparatedBySpaces(value) {
  return !/[^\s]#[^\s]/.test(value);
}

function validateHashtags(value) {
  if (!checkStartsWithHash(value)) {
    errorMessage = "Каждый хэш-тег должен начинаться с символа #";
  }
  if (!checkSeparatedBySpaces(value)) {
    errorMessage = "Хэштеги должны разделяться пробелами";
  }
  if (!checkUniqueHashtags(value)) {
    errorMessage = "Хэштеги не могут повторяться.";
  }
  return checkStartsWithHash(value) && checkUniqueHashtags(value) && checkSeparatedBySpaces(value);
}

function getErrorMessage() {
  return errorMessage;
}

pristine.addValidator(userForm.querySelector(".text__hashtags"), validateHashtags, getErrorMessage);

userForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

hashtags.addEventListener("input", () => {
  const isValid = pristine.validate();

  if (isValid) {
    hashtags.classList.remove("form-input-error");
  } else {
    hashtags.classList.add("form-input-error");
  }
});

export {openEditingForm};

