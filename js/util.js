const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement("div");
  alertContainer.style.zIndex = "100";
  alertContainer.style.position = "absolute";
  alertContainer.style.left = "0";
  alertContainer.style.top = "0";
  alertContainer.style.right = "0";
  alertContainer.style.padding = "10px 3px";
  alertContainer.style.fontSize = "30px";
  alertContainer.style.textAlign = "center";
  alertContainer.style.backgroundColor = "red";

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


const showMessageModal = (template) => {
  const messageFragment = template.cloneNode(true);

  document.body.append(messageFragment);

  const messageButton = messageFragment.querySelector(".close__button");

  const closeMessage = () => {
    messageFragment.remove();
    document.removeEventListener("keydown", onDocumentKeydown);
    document.removeEventListener("click", onDocumentClick);
  };

  function onDocumentKeydown (evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      closeMessage();
    }
  }

  function onDocumentClick (evt) {
    if (!evt.target.closest(".inner")) {
      closeMessage();
    }
  }

  messageButton.addEventListener("click", closeMessage);

  document.addEventListener("keydown", onDocumentKeydown);

  document.addEventListener("click", onDocumentClick);
};


export {showAlert, showMessageModal};
