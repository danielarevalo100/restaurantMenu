export const urlParams = (query) => {
  var vars = query.split('&');
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    if (typeof query_string[key] === 'undefined') {
      query_string[key] = decodeURIComponent(value);
    } else if (typeof query_string[key] === 'string') {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

export const validEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const emptyString = (str) => {
  return (str == null || /^\s*$/.test(str))
}

export const capitalize = (s) => {
  if( typeof s !== 'string' ) return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const ellipsis = (s = '', length = 8) => {
  let start = s.substring(0, length);
  let end = s.substring(s.length -length);
  return `${start}...${end}`;
}

export const validUrl = (url) => {
  return /^(.+\..+)$/.test(url)
}

export const parseHTMLEntities = (html) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export const removeStringFromArray = (arr, string) => {
  const i = arr.indexOf(string);
  if ( i !== -1 ) {
    arr.splice( i, 1 );
  }
}

export const parseDate = (onSecondstimeStamp) => {
  const date = new Date( onSecondstimeStamp * 1000 );
  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}
