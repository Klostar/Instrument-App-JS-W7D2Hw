const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;

};

InstrumentInfoView.prototype.bindEvents = function (){
  PubSub.subscribe('Instrument:selected-instrument-ready',(event) =>{
    const instrument = event.detail;
    this.render(instrument);
  });

InstrumentInfoView.prototype.render = function (instrument) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent =`The ${instrumentFamilies.name} is ${instumentFamilies.description}`
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};


};
