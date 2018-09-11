const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', function(){
  const selectedElement = document.querySelector('select#instrument-families');
  const instrumentFamiliesDropDown = new SelectView(selectedElement);
  instrumentFamiliesDropDown.bindEvents();



const instrumentFamilies = new InstrumentFamilies();
instrumentFamilies.bindEvents();

});
