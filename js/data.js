import {getUniqueValues, getRandomInt} from "./util.js";

let idArray = [];
let urlArray = [];
let commentIdArray = [];

const NAMES = [
  "Александр", "Алексей", "Анатолий", "Андрей", "Анна", "Аркадий",
  "Борис", "Валентин", "Валерия", "Василий", "Виктор", "Виктория",
  "Владимир", "Владислав", "Галина", "Георгий", "Дмитрий", "Евгений",
  "Екатерина", "Елена", "Иван", "Игорь", "Ирина", "Кирилл",
  "Лидия", "Максим", "Мария", "Наталья", "Николай", "Ольга"
];

const COMMENTS = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

function getCommentText() {
  const selectedText = [];
  const count = getRandomInt(1, 2);
  while (selectedText.length < count) {
    const randomMessage = COMMENTS[getRandomInt(0, COMMENTS.length - 1)];
    if (!selectedText.includes(randomMessage)) {
      selectedText.push(randomMessage);
    }
  }
  return selectedText.join(" ");
}


function getCommentsArray() {
  const commentsNum = getRandomInt(0, 30);
  return Array.from({ length: commentsNum }, () => ({
    id: getUniqueValues(0, 750, commentIdArray),
    avatar: `img/avatar-${ getRandomInt(1,6) }.svg`,
    message: getCommentText(),
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  }));
}

function createPhotoDescription() {
  commentIdArray = [];
  idArray = [];
  urlArray = [];
  return Array.from({ length: 25 }, () => ({
    id: getUniqueValues(1,25,idArray),
    url: `photos/${getUniqueValues(1,25,urlArray)}.jpg`,
    description: "Счастье — это делать то, что ты любишь!",
    likes: getRandomInt(15, 200),
    comments: getCommentsArray(),
  }));
}

export {createPhotoDescription};
