const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:InstrumentReady', (event) => {
    const allFamilies = event.detail;
    this.populate(allFamilies)
  });


};
SelectView.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument,index) =>{
    const option = document.createElement('option');
    option.textContent = instrument.name
    option.value = index;
    this.element.appendChild(option);

  })

};

module.exports = SelectView;
