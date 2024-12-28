import { setUserFormSubmit, closeEditingfForm } from "./form.js";
import { createPhotoDescription } from "./pictures.js";
import { handlePhotoClick } from "./post-modal.js";
import { getData } from "./api.js";

getData()
  .then((photos) => {
    createPhotoDescription(photos);
    handlePhotoClick(photos);
  });

setUserFormSubmit(closeEditingfForm);
