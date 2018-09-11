const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:InstrumentReady', (event) => {
    const allFamilies = event.detail;
    console.log(allFamilies);
    this.populate(allFamilies)
  });

};

module.exports = SelectView;
