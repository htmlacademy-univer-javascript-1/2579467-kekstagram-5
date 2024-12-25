import { openEditingForm } from "./form.js";

const FILE_TYPES = ["jpg", "jpeg", "png"];

const fileChooser = document.querySelector("input[type=file]");
const preview = document.querySelector(".img-upload__preview img");
const effectsView = document.querySelectorAll(".effects__preview");

fileChooser.addEventListener("change", () => {
  openEditingForm();
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const fileURL = URL.createObjectURL(file);
    preview.src = fileURL;
    effectsView.forEach((view) => {
      view.style.backgroundImage = `url(${fileURL})`;
    });
  }
});
