import "./photo.js";
import { showMessageModal } from "./util.js";
import { sendData } from "./api.js";

const uploadImgInput = document.querySelector(".img-upload__input");
const uploadImgOverlay = document.querySelector(".img-upload__overlay");
const uploadImgCancel = document.querySelector(".img-upload__cancel");
const userForm = document.querySelector(".img-upload__form");
const bodyElement = document.querySelector("body");
const hashtags = userForm.querySelector(".text__hashtags");

const successTemplate = document.querySelector("#success").content.querySelector(".success");
const errorTemplate = document.querySelector("#error").content.querySelector(".error");

const pristine = new Pristine(userForm, {classTo: "setup-user-form__element", errorTextParent: "setup-user-form__element"});
let errorMessage = "";

const openEditingForm = () => {
  uploadImgOverlay.classList.remove("hidden");
  bodyElement.classList.add("modal-open");
};

const closeEditingfForm = () => {
  uploadImgOverlay.classList.add("hidden");
  bodyElement.classList.remove("modal-open");
  uploadImgInput.value = "";
};

uploadImgCancel.addEventListener("click", closeEditingfForm);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeEditingfForm();
  }
});

const validateHashtags = (value) => {
  const hashtagsArray = value.toLowerCase().trim().split(" ");
  const uniqueHashtags = new Set(hashtagsArray);

  if (!hashtagsArray.every((tag) => tag === "" || tag.startsWith("#"))) {
    errorMessage = "Каждый хэш-тег должен начинаться с символа #";
    return false;
  }

  if (hashtagsArray.length !== uniqueHashtags.size) {
    errorMessage = "Хэштеги не могут повторяться.";
    return false;
  }

  if (/[^\s]#[^\s]/.test(value)) {
    errorMessage = "Хэштеги должны разделяться пробелами.";
    return false;
  }

  errorMessage = "";
  return true;
};

const getErrorMessage = () => errorMessage;

pristine.addValidator(userForm.querySelector(".text__hashtags"), validateHashtags, getErrorMessage);

const setUserFormSubmit = (onSuccess) => {
  userForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      const submitButton = evt.target.querySelector("button[type='submit']");

      submitButton.disabled = true;

      sendData(formData).then(onSuccess).then(() => {
        showMessageModal(successTemplate);
        userForm.reset();
      }).catch(() => {
        showMessageModal(errorTemplate);
      }).finally(() => {
        submitButton.disabled = false;
      });
    }
  });
};

hashtags.addEventListener("input", () => {
  const isValid = pristine.validate();

  if (isValid) {
    hashtags.classList.remove("form-input-error");
  } else {
    hashtags.classList.add("form-input-error");
  }
});

export {openEditingForm, setUserFormSubmit, closeEditingfForm};

