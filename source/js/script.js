'use strict';

const tabletWidth = 900;

// взятие значения из адресной строки(запросы по ссылкам)
const getUrlParams = search => {
  const params = {};
  search.substr(1).split("&").forEach(part => {
    const [key, value] = part.split("=");
    params[key] = decodeURIComponent(value);
  });
  return params;
};

let requestUrl = getUrlParams(window.location.search).wheel || 'дефолтный запрос';

// // запросы Url (настройка ссылок)
// const openBookmark = () => {
//   if (requestUrl === "superieur") {
//     функция, которую нужно выполнить по запросу superieur
//   }

//   if (requestUrl === "etrangere") {
//     функция, которую нужно выполнить по запросу etrangere
//   } else {
//     $('.main-nav__bookmark-item--superieur main-nav__bookmark').trigger('click');
//   }
// }
// openBookmark();

// Плавный скролл до дом-элемента

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: ($(hash).offset().top) - 150 // 150px - высота липкой шапки(докрутка)
      }, 800);
    }
  });
});