const createComment = (avatar, name, text) => {

  const listItem = document.createElement("li");
  listItem.classList.add("social__comment");

  const img = document.createElement("img");
  img.classList.add("social__picture");
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement("p");
  p.classList.add("social__text");
  p.textContent = text;

  listItem.appendChild(img);
  listItem.appendChild(p);

  return listItem;
};

export {createComment};
