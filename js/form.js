import "./photo.js";

const uploadImgInput = document.querySelector(".img-upload__input");
const uploadImgOverlay = document.querySelector(".img-upload__overlay");
const uploadImgCancel = document.querySelector(".img-upload__cancel");
const userForm = document.querySelector(".img-upload__form");
const bodyElement = document.querySelector("body");
const hashtags = document.querySelector(".text__hashtags");

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

uploadImgInput.addEventListener("change", openEditingForm);

uploadImgCancel.addEventListener("click", closeEditingfForm);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeEditingfForm();
  }
});

function validateStartsWithHash(value) {
  const allHashtags = value.trim().split(" ");
  return allHashtags.every((tag) => tag === "" || tag.startsWith("#"));
}

function validateUniqueHashtags(value) {
  const allHashtags = value.trim().split(" ").map((tag) => tag.toLowerCase());
  const uniqueHashtags = new Set(allHashtags);
  return allHashtags.length === uniqueHashtags.size;
}
function validateSeparatedBySpaces(value) {
  return !/[^\s]#[^\s]/.test(value);
}

pristine.addValidator(userForm.querySelector(".text__hashtags"), validateStartsWithHash, "Каждый хэш-тег должен начинаться с символа #.");
pristine.addValidator(userForm.querySelector(".text__hashtags"), validateSeparatedBySpaces, "Хэштеги должны разделяться пробелами.");
pristine.addValidator(userForm.querySelector(".text__hashtags"),validateUniqueHashtags, "Хэштеги не могут повторяться.");

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

