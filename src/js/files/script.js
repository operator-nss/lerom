// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const videoImage = document.querySelector('.video__image-ibg');
const videoIcon = document.querySelector('.video__icon');
const videoBody = document.querySelector('.video__body');

videoIcon.addEventListener("click", () => {

   videoImage.classList.add('_active');
   videoBody.classList.add('_hidden');


});
