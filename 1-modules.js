'use strict';

const util = require('./util');

util.printName({
  name: 'Jane Doe'
});


// const natural = require('natural');
// const classifier = new natural.BayesClassifier();

// classifier.addDocument('i am long qqqq', 'buy');
// classifier.addDocument('buy the q\'s', 'buy');
// classifier.addDocument('short gold', 'sell');
// classifier.addDocument('sell gold', 'sell');
 
// classifier.train();

// console.log(classifier.classify('i am short silver'));


// const _ = require('lodash');

// const data = [[5], [10], [15]];
// const flat_data = _.flatten(data);

// console.log(flat_data);


// const diff = _.difference([2, 1, 5, 10], [2, 5]);

// console.log(diff);


// const moment = require('moment');

// const today = moment();
// const tomorrow = today.add(1, 'd').format('YYYY/MM/DD');

// console.log(today);
// console.log(tomorrow);