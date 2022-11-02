// const mapContainer = document.querySelector('#map');

const initMap = () => {
  const mapContainer = $('#map').get(0);

  if (!mapContainer) {
    return;
  }
  let ymaps = window.ymaps;
  let placemark;
  let map;

  if (!ymaps) {
    return;
  }

  const showResult = (obj) => {
    // Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
    $('#suggest').removeClass('is-invalid-address');
    $('#suggest').parent().removeClass('is-invalid-address');
    $('#notice').css('display', 'none');

    // const mapContainer = $('#map');
    const bounds = obj.properties.get('boundedBy');
    // Рассчитываем видимую область для текущего положения пользователя.
    let mapState = ymaps.util.bounds.getCenterAndZoom(
        bounds,
        [mapContainer.clientWidth, mapContainer.clientHeight]
    );
    // Сохраняем полный адрес для сообщения под картой.
    const address = [obj.getAddressLine()].join(', ');
    // Сохраняем укороченный адрес для подписи метки.
    const shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
    // Убираем контролы с карты.
    mapState.controls = [];
    // Создаём карту.
    createMap(mapState, address);
    // Выводим сообщение под картой.
    $('#suggest').val(address);
    $('#suggest').text(address);

    $('textarea').height(0);
    $('textarea').height($('textarea').get(0).scrollHeight);

    if ($(window).height() > 1023) {
      if ($('textarea').height() > 27) {
        $('textarea').parent().css('height', '66px');
      } else {
        $('textarea').parent().css('height', '45px');
      }
    } else {
      if ($('textarea').height() > 27) {
        $('textarea').parent().css('height', '66px');
      } else {
        $('textarea').parent().css('height', '45px');
      }
    }

    showMessage(address);
  };

  const showError = (message) => {

    $('#suggest').addClass('is-invalid-address');
    $('#suggest').parent().addClass('is-invalid-address');
    $('#notice').text(message);
    $('#notice').css('display', 'block');
    // Убираем метку
    if (placemark) {
      placemark.geometry.setCoordinates(null, null);
    }
  };


  const createMap = (state, caption) => {
    // Если карта еще не была создана, то создадим ее и добавим метку с адресом.
    if (!placemark) {
      map.setCenter(state.center, state.zoom);
      // map = new ymaps.Map('map', state);
      placemark = new ymaps.Placemark(
          map.getCenter(), {
            iconCaption: caption,
            balloonContent: caption,
          }, {
            preset: 'islands#redDotIconWithCaption',
          });
      map.geoObjects.add(placemark);
      // Если карта есть, то выставляем новый центр карты и меняем данные и позицию метки в соответствии с найденным адресом.
    } else {
      map.setCenter(state.center, state.zoom);
      placemark.geometry.setCoordinates(state.center);
      placemark.properties.set({iconCaption: caption, balloonContent: caption});
    }
  };

  const showMessage = (message) => {
    $('#messageHeader').text('Данные получены:');
    $('#message').text(message);
  };

  const geocode = () => {
    // Забираем запрос из поля ввода.
    const request = $('#suggest').val();
    // $('#suggest').text(request);
    // Геокодируем введённые данные.
    ymaps.geocode(request).then(function (res) {
      const obj = res.geoObjects.get(0);
      let error;
      let hint;

      if (obj) {
        // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
        switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
          case 'exact':
            break;
          case 'number':
          case 'near':
          case 'range':
            error = 'Неточный адрес, требуется уточнение';
            hint = 'Уточните номер дома';
            break;
          case 'street':
            error = 'Неполный адрес, требуется уточнение';
            hint = 'Уточните номер дома';
            break;
          case 'other':
          default:
            error = 'Неточный адрес, требуется уточнение';
            hint = 'Уточните адрес';
        }
      } else {
        error = 'Адрес не найден';
        hint = 'Уточните адрес';
      }

      // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
      if (error) {
        showError(error);
        showMessage(hint);
      } else {
        showResult(obj);
      }
    }, function (e) {
      // console.log(e)
    });
  };

  ymaps.ready(function () {
    map = new ymaps.Map(mapContainer, {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.76, 37.64], // Москва
      zoom: 10,
      controls: [],
    },
    {
      searchControlProvider: 'yandex#search',
    });

    // let placemark;

    // Подключаем поисковые подсказки к полю ввода.
    // const suggestView = new ymaps.SuggestView('suggest');

    // При клике по кнопке запускаем верификацию введёных данных.

    $('#button').on('click', function (e) {
      geocode();
    });

    $('#suggest').on('input', function (e) {
      $('#suggest').removeClass('is-invalid-address');
      $('#suggest').parent().removeClass('is-invalid-address');
      $('#notice').css('display', 'none');
    });

    $('#suggest').on('change', function (e) {
      geocode();
    });
  });

};

export {initMap};
