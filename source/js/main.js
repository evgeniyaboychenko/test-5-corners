import {initMap} from './modules/map';
import {initSelect} from './modules/init-select';
import {initLabel} from './modules/init-label';
import {formValidate} from './modules/form-validate';
import {textarea} from './modules/textarea';
import {menu} from './modules/menu';

$(window).on('load', function () {
  initMap();
  initLabel();
  initSelect();
  formValidate();
  textarea();
  menu();
});
