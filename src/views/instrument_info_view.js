const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;

};

InstrumentInfoView.prototype.bindEvents = function (){
  PubSub.subscribe('Instrument:selected-instrument-ready',(event) =>{
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function (instrument) {
  const infoParagraph = document.createElement('p');
  infoParagraph.setAttribute('style','white-space: pre;')
  infoParagraph.textContent =`Instrument Family: ${instrument.name} \r\ndescription: ${instrument.description}
  \r\nInstruments Contained within this family are ${instrument.instruments}`
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;
