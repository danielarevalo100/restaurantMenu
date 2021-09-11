export const getWithNotation = (object, keys) => {
  let dataToReturn = object;
  if( !dataToReturn ) return null;
  keys.split('.').map((splitKey) => {
    if( dataToReturn ) {
      dataToReturn = dataToReturn[splitKey];
    }
  });
  return dataToReturn;
}

export const updateWithNotation = (object, key, value) => {
  var keys = Array.isArray(key) ? key : key.split('.');
  var curStep = object;
  for (var i = 0; i < keys.length - 1; i++) {
    var key = keys[i];
    if( !curStep[key] && !Object.prototype.hasOwnProperty.call(curStep, key) ) {
      var nextKey = keys[i+1];
      var useArray = /^\+?(0|[1-9]\d*)$/.test(nextKey);
      curStep[key] = useArray ? [] : {};
    }
    curStep = curStep[key];
  }
  var finalStep = keys[keys.length - 1];
  curStep[finalStep] = value;
}

export const objectToArray = (object) => {
  return Object.keys(object).map((key) => {
    return object[key]
  });
}
