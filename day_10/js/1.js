"use strict";

// Find out the indexes where the string needs splitting
function getSplitIndexes(str) {
  // Initialise the last checked character as the first in the string
  var last_char = str[0];

  // We need to include the first segment
  var splits = [0];
  for (var i in str) {
    // If this char is different to the last one we checked, add it to the list
    if (str[i] !== last_char) {
      splits.push(i);
    }

    last_char = str[i];
  }

  return splits;
}

function getParts(str) {
  var splits = getSplitIndexes(str);

  var parts = [];

  for (var i = 0; i < splits.length; i++) {
    var now = splits[i];
    var next = splits[i + 1];

    if (next === undefined) {
      parts.push(str.substring(now));
    } else {
      parts.push(str.substring(now, next));
    }
  }
}

function process(str) {
  var parts = getParts(str);
}

process("111223333");
