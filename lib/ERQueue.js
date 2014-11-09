
/*Modify the ED example (Example 5-5)
so the user can control the activity in the ED.
Create a menu system that allows the user
to choose from the following activ‐ ities:
a. Patient enters ED.
b. Patient is seen by doctor.
c. Display list of patients waiting to be seen.*/
'use strict';

var ERQueue = function() {
  this.dataStore = [];
};

ERQueue.prototype.enqueue = function(element) {
  this.dataStore.push(element);
};

ERQueue.prototype.dequeue = function() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code > this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
};

ERQueue.prototype.front = function() {
  return this.dataStore[0];
};

ERQueue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

ERQueue.prototype.toString = function() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name +
    ' code: ' + this.dataStore[i].code + '\n';
  }
  return retStr;
};

ERQueue.prototype.empty = function() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = ERQueue;
