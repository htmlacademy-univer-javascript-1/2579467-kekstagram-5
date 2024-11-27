const idArray = [];
const urlArray = [];
const commentIdArray = [];
const userPhotos = [];

const NAMES = [
  "Александр", "Алексей", "Анатолий", "Андрей", "Анна", "Аркадий",
  "Борис", "Валентин", "Валерия", "Василий", "Виктор", "Виктория",
  "Владимир", "Владислав", "Галина", "Георгий", "Дмитрий", "Евгений",
  "Екатерина", "Елена", "Иван", "Игорь", "Ирина", "Кирилл",
  "Лидия", "Максим", "Мария", "Наталья", "Николай", "Ольга"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueId() {
  let id = getRandomInt(1, 25);
  while (idArray.includes(id)) {
    id = getRandomInt(1, 25);
  }
  idArray.push(id);
  return id;
}

function getUniqueUrl() {
  let url = getRandomInt(1, 25);
  while (urlArray.includes(url)) {
    url = getRandomInt(1, 25);
  }
  urlArray.push(url);
  return url;
}

function getUniqueCommentId() {
  let id = getRandomInt(0, 750);
  while (commentIdArray.includes(id)) {
    id = getRandomInt(0, 750);
  }
  commentIdArray.push(id);
  return id;
}

function getCommentsArray() {
  const commentArray = [];
  const commentsNum = getRandomInt(0, 30);
  for (let i = 0; i < commentsNum; i++) {
    const comment = {
      id: getUniqueCommentId(),
      avatar: `img/avatar-${ getRandomInt(1,6) }.svg`,
      message: "Всё отлично!",
      name: NAMES[getRandomInt(0, NAMES.length - 1)],
    };
    commentArray.push(comment);
  }
  return commentArray;
}

function createPhotoDescription() {
  for (let i = 0; i < 25; i++) {
    const obj = {
      id: getUniqueId(),
      url: `photos/${ getUniqueUrl() }.jpg`,
      description: "Счастье — это делать то, что ты любишь!",
      likes: getRandomInt(15,200),
      comment: getCommentsArray(),
    };
    userPhotos.push(obj);
  }
  return userPhotos;
}

console.log(createPhotoDescription());
