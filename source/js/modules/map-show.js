const mapContainer = document.querySelector('#map');

const initMap = () => {
  if (!mapContainer) {
    return;
  }
  let ymaps = window.ymaps;

  if (!ymaps) {
    return;
  }

  ymaps.ready(function () {
    // Подключаем поисковые подсказки к полю ввода.
    let suggestView = new ymaps.SuggestView('suggest');
    let map;
    let placemark;

    const geocode = () => {
      // Забираем запрос из поля ввода.
      const request = $('#suggest').val();
      // Геокодируем введённые данные.
      ymaps.geocode(request).then(function (res) {
        let obj = res.geoObjects.get(0);
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
        console.log(e);
      });
    };

    // При клике по кнопке запускаем верификацию введёных данных.
    $('#button').bind('click', function (e) {
      geocode();
      console.log("ddddddddddddddddddddddddd");
    });

    const showResult = (obj) => {
      // Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
      $('#suggest').removeClass('input_error');
      $('#notice').css('display', 'none');

      // var mapContainer = $('#map'),
      let bounds = obj.properties.get('boundedBy');
      // Рассчитываем видимую область для текущего положения пользователя.
      let mapState = ymaps.util.bounds.getCenterAndZoom(
          bounds,
          [mapContainer.width(), mapContainer.height()]
      );
      // Сохраняем полный адрес для сообщения под картой.
      let address = [obj.getCountry(), obj.getAddressLine()].join(', ');
      // Сохраняем укороченный адрес для подписи метки.
      let shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
      // Убираем контролы с карты.
      mapState.controls = [];
      // Создаём карту.
      createMap(mapState, shortAddress);
      // Выводим сообщение под картой.
      showMessage(address);
    };

    const showError = (message) => {
      $('#notice').text(message);
      $('#suggest').addClass('input_error');
      $('#notice').css('display', 'block');
      // Удаляем карту.
      if (map) {
        map.destroy();
        map = null;
      }
    };

    const createMap = (state, caption) => {
      // Если карта еще не была создана, то создадим ее и добавим метку с адресом.
      if (!map) {
        map = new ymaps.Map('map', state);
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
  }
  );
};

export {initMap};
