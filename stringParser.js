function stringParser(str) {
  var strArray = str.split(",");
  var isValid = true;
  var obj = { "and": {} };
  for(var i = 0; i < strArray.length; i++){
    var element = strArray[i];
    [key, value] = element.split(":");
    if(key && value) {
      var label = formatLabel(key)
      checkAndRemoveLabel(obj["and"], label)
      var valueObj = {}
      if(isArray(value)) {
        valueObj = changeToArray(value);
      }
      else if(isBetween(value)) {
        valueObj = changeToBetween(value);
      }
      else {
        valueObj = changeToEqual(value)
      }
      obj.and[label] = valueObj;
    }
    else {
      isValid = false;
      break;
    }
    
  }
  if(isValid) {
    return obj;
  }
  else {
    return null;
  }
}

function formatLabel(label) {
  return label.split("_").join(".")
}

function isArray(value) {
  return value.split("|").length > 1
}

function isBetween(value) {
  [val1, val2] = value.split("--to--")
  return val1 && val2 
}

function changeToArray(value) {
  return { "inq" : value.split("|") }
}

function changeToEqual(value) {
  return  { "eq": value }
}

function formatDate(date, timeString) {
  date = new Date(date);
  m = date.getMonth() + 1;
  d = date.getDate();
  y = date.getFullYear().toString();
  m = m > 9 ? m.toString() : "0" + m;
  d = d > 9 ? d.toString() : "0" + d;
  return y + '-' + m + '-' + d + timeString;
}

function changeToBetween(value) {
  var dates = value.split("--to--")
  
  return { "between": [formatDate(dates[0],"T00:00:00") ,
  formatDate(dates[1], "T23:59:59")] }
}

function checkAndRemoveLabel(obj, label) {
  var splitLabel = label.split(".");
  var keys = Object.keys(obj);
  if (splitLabel[1]) {
    for(var i = 0; i < keys.length; i ++) {
      if(keys[i] === splitLabel[1]) {
        delete obj[keys[i]];
        break;
      }
    }
  }
}

module.exports = stringParser;