const idArray = [];
const urlArray = [];
const commentIdArray = [];

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

function getRandomInt(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function getUniqueValues(min, max, valuesArray) {
  let value = getRandomInt(min, max);
  while (valuesArray.includes(value)) {
    value = getRandomInt(min, max);
  }
  valuesArray.push(value);
  return value;
}

function getCommentsArray() {
  const commentsNum = getRandomInt(0, 30);
  return Array.from({ length: commentsNum }, () => ({
    id: getUniqueValues(0, 750, commentIdArray),
    avatar: `img/avatar-${ getRandomInt(1,6) }.svg`,
    message: COMMENTS[getRandomInt(0, COMMENTS.length - 1)],
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  }));
}

function createPhotoDescription() {
  return Array.from({ length: 25 }, () => ({
    id: getUniqueValues(1, 25, idArray),
    url: `photos/${getUniqueValues(1, 25, urlArray)}.jpg`,
    description: "Счастье — это делать то, что ты любишь!",
    likes: getRandomInt(15, 200),
    comments: getCommentsArray(),
  }));
}

console.log(createPhotoDescription());
