const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");
const picturesContainer = document.querySelector(".pictures");

const createPhotoDescription = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach(({comments, description, likes, url}) => {
    const userPicture = pictureTemplate.cloneNode(true);
    userPicture.querySelector(".picture__img").src = url;
    userPicture.querySelector(".picture__img").alt = description;
    userPicture.querySelector(".picture__likes").textContent = likes;
    userPicture.querySelector(".picture__comments").textContent = comments.length;
    pictureFragment.appendChild(userPicture);
  });

  picturesContainer.appendChild(pictureFragment);
};


export {createPhotoDescription};
