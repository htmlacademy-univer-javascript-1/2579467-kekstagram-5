import { showAlert } from "./util.js";

const BASE_URL = "https://29.javascript.htmlacademy.pro/kekstagram";

const Route = {
  GET_DATA: "/data",
  SEND_DATA: "/",
};

const ErrorText = {
  GET_DATA: "Не удалось загрузить данные. Попробуйте обновить страницу",
  SEND_DATA: "Не удалось отправить форму. Попробуйте ещё раз",
};

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json()).catch(()=> {
    showAlert(ErrorText.GET_DATA);
  });

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: "POST",
    body,
  });

export {getData, sendData};
