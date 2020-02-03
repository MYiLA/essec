'use strict';

const tabletWidth = 900;
//- script(type='text/javascript' defer) new Glide('.glide', {type: 'carousel',startAt: 0, perView: 3, gap: 30, autoplay: 4000, animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)', dragThreshold: 50, animationDuration: 1000, breakpoints: { 1100: {perView: 2 },550: {perView: 1}},}).mount();
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