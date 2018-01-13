var overlay = document.querySelector(".modal-overlay");
var feedbackOpen = document.querySelector(".contacts__btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackClose = document.querySelector(".modal-feedback__close");
var feedbackInputName = document.querySelector("#feedback-form__name");
var feedbackInputEmail = document.querySelector("#feedback-form__e-mail");
var feedbackInputText = document.querySelector("#feedback-form__text");
var feedbackStorageName = localStorage.getItem("feedbackStorageName");
var feedbackStorageEmail = localStorage.getItem("feedbackStorageEmail");
// .js-modal__show

feedbackOpen.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("js-modal__show");
    feedbackPopup.classList.add("js-modal__show");

    feedbackInputText.focus();
    //
    if (feedbackStorageEmail) {
        feedbackInputEmail.value = feedbackStorageEmail;
    } else {
        feedbackInputEmail.focus();
    }
    //
    if (feedbackStorageName) {
        feedbackInputName.value = feedbackStorageName;
    } else {
        feedbackInputName.focus();
    }
});

feedbackClose.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.remove("js-modal__show");
    feedbackPopup.classList.remove("js-modal__show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (feedbackPopup.classList.contains("js-modal__show")) {
            overlay.classList.remove("js-modal__show");
            feedbackPopup.classList.remove("js-modal__show");
        }
    }
});

feedbackForm.addEventListener("submit", function (event) {
    var name = feedbackInputName.value;
    var email = feedbackInputEmail.value;
    var text = feedbackInputText.value;
    if (!name || !email || !text) {
        event.preventDefault();
        console.log("Все поля обязательны для заполнения");
        feedbackPopup.classList.remove("js-modal__error");
        void feedbackPopup.offsetWidth; // QUEST: Magic? Normal code?
        feedbackPopup.classList.add("js-modal__error");
    } else {
        localStorage.setItem("feedbackStorageName", name);
        localStorage.setItem("feedbackStorageEmail", email);
    }
});
