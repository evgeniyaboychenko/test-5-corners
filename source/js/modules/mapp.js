const mapContainer = document.querySelector('#map');
const initMap = () => {
  if (!mapContainer) {
    return;
  }
  const ymaps = window.ymaps;
  // let placemark;

  if (!ymaps) {
    return;
  }

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(init);

  function init() {
    console.log('ddddddd');
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    const myMap = new ymaps.Map('map', {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.76, 37.64], // Москва
      zoom: 10,
    }, {
      searchControlProvider: 'yandex#search',
    });
  }
};

export {initMap};
